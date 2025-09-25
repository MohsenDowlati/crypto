import React from "react";
import {MagnetSvg} from "../svg";
import Link from "next/link";

export default function Navbar({children}) {
    return (
        <nav className="navbar_container">
            <Link href="/">
                <MagnetSvg className="navbar_logo" />
            </Link>
            {children}
        </nav>
    )
}