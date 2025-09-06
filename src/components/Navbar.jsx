import React from "react";
import {MagnetSvg} from "@/svg";

export default function Navbar() {
    return (
        <nav className="navbar_container">
            <MagnetSvg className="navbar_logo" />
            <div className="navbar_navigation_container">
                <button className="navbar_navigation_button">slider</button>
                <button className="navbar_navigation_button">see</button>
                <button className="navbar_navigation_button">work</button>
            </div>
            <button className="navbar_start">get started</button>
        </nav>
    )
}