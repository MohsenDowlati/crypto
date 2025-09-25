import React from 'react';

export default function Footer({updated, reasons, strength}) {
    return (
            <div className="details_footer_container">
                <div className="details_footer_upper">
                    <h2>Signal Summary</h2>
                    <h4>Last Updated: {updated}</h4>
                </div>
                <div className="details_footer_below">
                    <div className="details_footer_card">
                        <p>{reasons}</p>
                        <h4>Total Reasons</h4>
                    </div>
                    <div className="details_footer_card">
                        <p>{strength}</p>
                        <h4>Signal Strength</h4>
                    </div>
                </div>
            </div>
        )
};