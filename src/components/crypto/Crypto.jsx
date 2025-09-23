import React from 'react';
import Header from "@/components/crypto/Header";
import Footer from "@/components/crypto/Footer";
import {crypto_data} from "@/common/data";
import CryptoCard from "@/components/crypto/CryptoCard";

export default function Crypto() {
    return (
        <>
            <Header/>
            <div>
                {
                    crypto_data.map((item, index) => (
                        <CryptoCard key={index} iconURL={item.iconURL} iconALT={item.iconALT} name={item.name} tag={item.tag} percentage={item.percentage} fee={item.fee} source={item.source} strength={item.strength} />
                    ))
                }
            </div>

            <Footer/>
        </>
    )
};