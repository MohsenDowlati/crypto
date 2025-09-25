import React from 'react';



export default function DetailCard(
    {
        icon,
        category,
        signal,
        description,
    }
) {
    return (
        <div className="details_card_container">
            <div className="details_card_upper">
                <div className="details_card_logo_container">
                    {icon}
                </div>
                <p className="details_card_category">
                    {category}
                </p>

                <div className="details_card_signal">
                    {signal > 1 ? `${signal} signals` : `${signal} signal`}
                </div>
            </div>
            <div className="details_card_description">
                {
                    description.map((item, index) => (
                        <div key={index} className="details_card_line">
                            <div className="details_card_circle"/>
                            <div>
                                <p className="details_card_title">{item.title}</p>
                                {
                                    item.sub_title && (
                                        <p className="details_card_sub_title">{item?.sub_title}</p>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}