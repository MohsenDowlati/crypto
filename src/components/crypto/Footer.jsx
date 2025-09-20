import React from 'react';

export default function Footer({signal="3",rate="87%"}) {
    return (
        <>
            <div>
                <h2>
                    Today's Summary
                </h2>
                <div className="crypto_footer_num_container">
                    <div>
                        {signal}
                        <p>Signals Found</p>
                    </div>
                    <div>
                        {rate}
                        <p>Accuracy Rate</p>
                    </div>
                </div>
            </div>
        </>
    )
}