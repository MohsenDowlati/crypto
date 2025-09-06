import React from 'react';

export default function Slider({title, description, icon}) {
    return (
        <div className="slider_container">
            <div className="slider_logo_container">
                {icon}
            </div>
            <div>
                <h3 className="slider_header">{title}</h3>
                <p className="slider_description">{description}</p>
            </div>
        </div>
    );
}