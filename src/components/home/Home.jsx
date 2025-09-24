import React, {useEffect, useState} from 'react';
import Welcome from "./Welcome";
import Slider from "./Slider";
import {home_footer, see, slider, work} from "../../common/data";
import See from "./See";
import Work from "./Work";
import {RightArrowSvg} from "../../svg";
import {HomeFooter} from "./HomeFooter";
import Link from "next/link";

export default function Home() {

    const [display, setDisplay] = useState([true,false,false]);


    useEffect(() => {
        const interval = setInterval(() => {
            setDisplay((prev) => {
                const currentIndex = prev.findIndex((val) => val === true);
                const nextIndex = (currentIndex + 1) % prev.length;

                return prev.map((_, i) => i === nextIndex);
            });
        }, 5000);
        return () => clearInterval(interval); // cleanup on unmount
    }, [display]);

    return (
        <>
            <Welcome/>
            <div>
                {
                    slider.map((item, index) => (
                        <Slider key={index} title={item.title} description={item.description} icon={item.icon} disply={display[index]} />
                    ))
                }
            </div>
            <div className="see_container">
                <h3>What You'll See</h3>
                {
                    see.map((item, index) => (
                        <See key={index} title={item.title} description={item.description} icon={item.icon} />
                    ))
                }
            </div>
            <div className="work_container">
                <h3>How It Works</h3>
                {
                    work.map((item, index) => (
                        <Work key={index} id={item.id} description={item.description} />
                    ))
                }
            </div>
            <div className="homeFooter_btn">
                <Link href={"/crypto-list"}>
                    <button className="homeFooter_btn_button">
                        Start Exploring Crypto Signals
                        <RightArrowSvg/>
                    </button>

                </Link>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "30px",
            }}>
                <p style={{
                    fontSize: "14px",
                    padding: "10px",
                    color: "grey",
                }}>Updated every hour • No registration needed</p>
                <div className="homeFooter_container">
                    {
                        home_footer.map((item, index) => (
                            <HomeFooter key={index} number={item.number} text={item.text} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}