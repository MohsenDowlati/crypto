import React from 'react';
import Image from "next/image";

export default function CryptoCard(
    {
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
    return (
        <>
            <div>
                <div>
                    <div>
                        <Image src={iconURL} alt={iconALT}/>
                    </div>
                    <div>
                        <div>
                            <h3>{name}</h3>
                            <div>
                                <div>{tag}</div>
                                <p>{percentage}</p>
                            </div>
                        </div>
                        <div>
                            {
                                source.map((item, index) => (
                                    <div key={index}>
                                        <div/>
                                        <p>{item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h2>
                            {fee}
                        </h2>
                    </div>
                </div>
                <div>
                    <h5>Signal Strength</h5>
                    <div>
                        <div style={{backgroundColor: (strength>=1 ? "black":"aqua")}}/>
                        <div style={{backgroundColor: (strength>=2 ? "black":"aqua")}}/>
                        <div style={{backgroundColor: (strength>=3 ? "black":"aqua")}}/>
                        <div style={{backgroundColor: (strength>=4 ? "black":"aqua")}}/>
                        <div style={{backgroundColor: (strength>=5 ? "black":"aqua")}}/>
                    </div>
                </div>
            </div>
        </>
    )
}