import React from 'react';
import Progress from "@/components/crypto/Progress";

export default function Header() {
    return (
        <>
            <div>
                <div>
                    <h1>Crypto Signals</h1>
                    <h3>Discover cryptocurrencies worth watching right now</h3>
                    <Progress/>
                </div>
            </div>
        </>
    )
}