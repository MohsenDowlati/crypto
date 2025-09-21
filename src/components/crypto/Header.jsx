import React from 'react';
import Progress from "@/components/crypto/Progress";

export default function Header() {
    return (
            <div className="crypto_header">
                    <h1 className="crypto_header_title">Crypto Signals</h1>
                    <h3 className="crypto_header_description">Discover cryptocurrencies worth watching right now</h3>
                    <Progress/>
            </div>
    )
}