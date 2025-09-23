import React from 'react';
import Link from "next/link";


export default function GetStarted() {
    return <Link href="/crypto-list">
        <button className="navbar_start">get started</button>
    </Link>
}