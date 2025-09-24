import React from "react";
import {MagnetSvg} from "../svg";

export default function Navbar({children}) {
    return (
        <nav className="navbar_container">
            <MagnetSvg className="navbar_logo" />
            {children}
        </nav>
    )
}