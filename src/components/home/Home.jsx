import React from 'react';
import Welcome from "@/components/home/Welcome";
import Slider from "@/components/home/Slider";
import {home_footer, see, slider, work} from "@/common/data";
import See from "@/components/home/See";
import Work from "@/components/home/Work";
import {RightArrowSvg} from "@/svg";
import {HomeFooter} from "@/components/home/HomeFooter";

export default function Home() {
    return (
        <article>
            <Welcome/>
            <div>
                {
                    slider.map((item, index) => (
                        <Slider key={index} title={item.title} description={item.description} icon={item.icon} />
                    ))
                }
            </div>
            <div>
                <h3>What You'll See</h3>
                {
                    see.map((item, index) => (
                        <See key={index} title={item.title} description={item.description} icon={item.icon} />
                    ))
                }
            </div>
            <div>
                <h3>How It Works</h3>
                {
                    work.map((item, index) => (
                        <Work key={index} data={index}/>
                    ))
                }
            </div>
            <div>
                <p>Start Exploring Crypto Signals</p>
                <RightArrowSvg/>
            </div>
            <p>Updated every hour • No registration needed</p>
            <div>
                {
                    home_footer.map((item, index) => (
                        <HomeFooter key={index} number={item.number} text={item.text} />
                    ))
                }
            </div>
        </article>
    )
}