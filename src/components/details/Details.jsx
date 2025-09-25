import React from 'react';
import Navbar from "./navbar";
import Strength from "./Strength";
import {details_card} from "../../common/data";
import DetailCard from "./DetailCard";
import Footer from "./Footer";

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
                {
                    details_card.map((item, index) => (
                        <DetailCard icon={item.icon} category={item.category} signal={item.signal} description={item.description} key={index} />
                    ))
                }
                <Footer updated={"2 minutes ago"} reasons={"8"} strength={"60%"}/>

            </section>
        </>
    )
}