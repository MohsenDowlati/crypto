import React from "react";
import {MagnetSvg} from "@/svg";

export default function Navbar() {
    return (
        <nav>
            <MagnetSvg/>
            <div>
                <button>slider</button>
                <button>see</button>
                <button>work</button>
            </div>
            <button>get started</button>
        </nav>
    )
}