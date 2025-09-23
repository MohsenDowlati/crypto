import React from 'react';

export default function Footer({signal="3",rate="87%"}) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "25px"
            }}>
                <h2>
                    Today's Summary
                </h2>
                <div className="crypto_footer_num_container">
                    <div className="homeFooter_card">
                        <h4>{signal}</h4>
                        <p>Signals Found</p>
                    </div>
                    <div className="homeFooter_card">
                        <h4>{rate}</h4>
                        <p>Accuracy Rate</p>
                    </div>
                </div>
            </div>
        </>
    )
}