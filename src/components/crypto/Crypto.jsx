import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {crypto_data} from "../../common/data";
import CryptoCard from "./CryptoCard";

export default function Crypto() {
    return (
        <>
            <Header/>
            <div>
                {
                    crypto_data.map((item, index) => (
                        <CryptoCard key={index} id={item.id} iconURL={item.iconURL} iconALT={item.iconALT} name={item.name} tag={item.tag} percentage={item.percentage} fee={item.fee} source={item.source} strength={item.strength} />
                    ))
                }
            </div>

            <Footer/>
        </>
    )
};