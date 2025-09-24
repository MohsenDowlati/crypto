import React from 'react';
import Image from "next/image";
import {useRouter} from "next/router";

export default function CryptoCard(
    {
        id,
        iconURL,
        iconALT ,
        name,
        tag ,
        percentage,
        source,
        fee ,
        strength,
    }
) {
    const router = useRouter();

    const navigationHandler = () => {
      router.push(`\\${id}`)
    }

    return (
            <div className="crypto_card_container" onClick={navigationHandler}>
                <div className="crypto_card_upper">
                    <div className="crypto_card_image_container">
                        <Image className="crypto_card_image" src={iconURL} alt={iconALT}/>
                    </div>
                    <div className="crypto_card_content">
                        <div className="crypto_card_content_upper">
                            <h3 className="crypto_card_content_upper_name">{name}</h3>
                            <div className="crypto_card_content_price_container">
                                <div className="crypto_card_content_tag">{tag}</div>
                                <p className="crypto_card_content_price">{percentage}</p>
                            </div>
                        </div>
                        <div className="crypto_card_content_below">
                            {
                                source.map((item, index) => (
                                    <div key={index} className="crypto_card_content_container">
                                        <div className="crypto_card_content_circle"/>
                                        <p className="crypto_card_content_paragraph">{item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="crypto_card_fee_container">
                        <h2 className="crypto_card_fee">
                            {fee}
                        </h2>
                    </div>
                </div>
                <div className="crypto_card_below">
                    <h5 className="crypto_card_strength">Signal Strength</h5>
                    <div className="crypto_card_circles_container">
                        <div className="crypto_card_circle" style={{backgroundColor: (strength>=1 ? "var(--CTA)":"var(--primary)")}}/>
                        <div className="crypto_card_circle" style={{backgroundColor: (strength>=2 ? "var(--CTA)":"var(--primary)")}}/>
                        <div className="crypto_card_circle" style={{backgroundColor: (strength>=3 ? "var(--CTA)":"var(--primary)")}}/>
                        <div className="crypto_card_circle" style={{backgroundColor: (strength>=4 ? "var(--CTA)":"var(--primary)")}}/>
                        <div className="crypto_card_circle" style={{backgroundColor: (strength>=5 ? "var(--CTA)":"var(--primary)")}}/>
                    </div>
                </div>
            </div>
    )
}