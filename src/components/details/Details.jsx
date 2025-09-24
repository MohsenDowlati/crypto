import React from 'react';
import Navbar from "./navbar";
import Strength from "./Strength";

export default function Details({id}) {
    const data = {
        name:"Bitcoin",
        tag:"BTC",
        img:"",
        price:"$64.723",
        percentage:"+2.4%"
    }
    return (
        <>
         <Navbar name={data.name} tag={data.tag} img={data.img} price={data.price} percentage={data.percentage} />
            <section>
                <Strength strength={3}/>
            </section>
        </>
    )
}