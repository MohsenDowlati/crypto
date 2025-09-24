import React from 'react';

export default function Strength({strength}) {
    return (
        <div className="strength">
            <div className="details_strength_container">
                <div className="details_strength_text_container">
                    <h2>Signal Strength</h2>
                </div>
                <div className="details_strength_circles">
                    <div className="crypto_card_circle" style={{backgroundColor: (strength>=1 ? "var(--CTA)":"var(--primary)")}}/>
                    <div className="crypto_card_circle" style={{backgroundColor: (strength>=2 ? "var(--CTA)":"var(--primary)")}}/>
                    <div className="crypto_card_circle" style={{backgroundColor: (strength>=3 ? "var(--CTA)":"var(--primary)")}}/>
                    <div className="crypto_card_circle" style={{backgroundColor: (strength>=4 ? "var(--CTA)":"var(--primary)")}}/>
                    <div className="crypto_card_circle" style={{backgroundColor: (strength>=5 ? "var(--CTA)":"var(--primary)")}}/>
                </div>

            </div>
            <h4>Strong bullish signals detected across multiple indicators</h4>
        </div>

    )
}