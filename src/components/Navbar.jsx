import React from "react";
import {MagnetSvg} from "@/svg";
import Link from "next/link";

export default function Navbar({children}) {
    return (
        <nav className="navbar_container">
            <MagnetSvg className="navbar_logo" />

            {children}

        </nav>
    )
}