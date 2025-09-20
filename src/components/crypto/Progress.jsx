import React, { useEffect, useRef, useState } from "react";

/**
 * SafeHourlyCircle
 * - 0 -> 100% over one hour (syncs once to time API)
 * - gradient color interpolates green -> orange -> red
 * - shimmer (when >90%) and pulse text (when >97%)
 * - avoids SVG filters and risky primitives
 */
export default function Progress({
                                             size = 180,
                                             strokeWidth = 12,
                                             apiUrl = "https://worldtimeapi.org/api/ip",
                                             showText = true,
                                         }) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const uid = useRef(`g${Math.random().toString(36).slice(2, 9)}`);
    const mounted = useRef(true);
    const rafRef = useRef(null);

    const [offsetMs, setOffsetMs] = useState(0);
    const [progress, setProgress] = useState(0);
    const [readable, setReadable] = useState("");

    // Sync time once (safe: inside useEffect -> client only)
    useEffect(() => {
        let canceled = false;
        mounted.current = true;

        async function fetchTime() {
            try {
                const r = await fetch(apiUrl, { cache: "no-store" });
                if (!r.ok) throw new Error("time API error");
                const data = await r.json();

                let serverMs = null;
                if (typeof data.unixtime === "number") serverMs = Math.floor(data.unixtime * 1000);
                else if (data.datetime) serverMs = Date.parse(data.datetime);
                else if (data.utc_datetime) serverMs = Date.parse(data.utc_datetime);

                if (serverMs && !canceled) setOffsetMs(serverMs - Date.now());
                else if (!canceled) setOffsetMs(0);
            } catch (e) {
                if (!canceled) setOffsetMs(0);
            }
        }

        fetchTime();
        return () => {
            canceled = true;
            mounted.current = false;
        };
    }, [apiUrl]);

    // RAF loop for smooth updates
    useEffect(() => {
        function loop() {
            const nowMs = Date.now() + offsetMs;
            const elapsedSec = ((nowMs / 1000) % 3600 + 3600) % 3600;
            const p = Math.max(0, Math.min(1, elapsedSec / 3600));
            setProgress(p);

            const d = new Date(nowMs);
            const hh = String(d.getHours()).padStart(2, "0");
            const mm = String(d.getMinutes()).padStart(2, "0");
            const ss = String(d.getSeconds()).padStart(2, "0");
            setReadable(`${hh}:${mm}:${ss}`);

            rafRef.current = requestAnimationFrame(loop);
        }
        rafRef.current = requestAnimationFrame(loop);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [offsetMs]);

    // safe color lerp (RGB)
    function lerpColor(a, b, t) {
        const pa = a.replace("#", ""), pb = b.replace("#", "");
        const ar = parseInt(pa.slice(0,2),16), ag = parseInt(pa.slice(2,4),16), ab = parseInt(pa.slice(4,6),16);
        const br = parseInt(pb.slice(0,2),16), bg = parseInt(pb.slice(2,4),16), bb = parseInt(pb.slice(4,6),16);
        const rr = Math.round(ar + (br - ar)*t).toString(16).padStart(2,"0");
        const gg = Math.round(ag + (bg - ag)*t).toString(16).padStart(2,"0");
        const bb2 = Math.round(ab + (bb - ab)*t).toString(16).padStart(2,"0");
        return `#${rr}${gg}${bb2}`;
    }

    const color = progress <= 0.5 ? lerpColor("#4caf50","#ff9800", progress/0.5) : lerpColor("#ff9800","#f44336",(progress-0.5)/0.5);
    const colorLight = lerpColor(color, "#ffffff", 0.12);

    const dashOffset = circumference * (1 - progress);
    const percent = Math.round(progress * 100);
    const shimmer = progress > 0.9;
    const pulse = progress > 0.97;

    return (
        <div style={{ width: size, height: size, position: "relative", display: "inline-block" }}>
            <style>{`
        @keyframes shimmerMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -${circumference*2}; }
        }
        .shimmer-${uid.current} {
          animation: shimmerMove 1.6s linear infinite;
          opacity: ${shimmer ? 1 : 0};
          transition: opacity 240ms ease;
        }
        .pulseCenter-${uid.current} {
          ${pulse ? `animation: pulseAnim 900ms ease-in-out infinite;` : ""}
        }
        @keyframes pulseAnim {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.06); opacity: 0.98; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <defs>
                    <linearGradient id={`${uid.current}-g`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={color} />
                        <stop offset="65%" stopColor={colorLight} />
                        <stop offset="100%" stopColor={color} />
                    </linearGradient>
                    <linearGradient id={`${uid.current}-s`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
                        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.12" />
                    </linearGradient>
                </defs>

                <g transform={`rotate(-90 ${size/2} ${size/2})`}>
                    <circle cx={size/2} cy={size/2} r={radius} stroke="#e6e6e6" strokeWidth={strokeWidth} fill="none" />
                    <circle
                        cx={size/2}
                        cy={size/2}
                        r={radius}
                        stroke={`url(#${uid.current}-g)`}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        strokeLinecap="round"
                        style={{ transition: "stroke-dashoffset 0.12s linear, stroke 300ms linear" }}
                    />
                    {/* shimmer: thin dashed stroke on top */}
                    <circle
                        className={`shimmer-${uid.current}`}
                        cx={size/2}
                        cy={size/2}
                        r={radius}
                        stroke={`url(#${uid.current}-s)`}
                        strokeWidth={Math.max(2, Math.floor(strokeWidth/2))}
                        fill="none"
                        strokeDasharray={`${circumference/6} ${circumference/6}`}
                        strokeDashoffset={dashOffset}
                        strokeLinecap="round"
                    />
                </g>
            </svg>

            <div style={{
                position: "absolute", inset: 0, display: "flex", alignItems: "center",
                justifyContent: "center", flexDirection: "column", userSelect: "none"
            }}>
                {showText && (
                    <div className={`pulseCenter-${uid.current}`} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: Math.round(size*0.14), fontWeight: 700 }}>Next update</div>
                        <div style={{ fontSize: Math.round(size*0.11), opacity: 0.85 }}>{readable}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
