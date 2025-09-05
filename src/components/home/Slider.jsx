import React from 'react';

export default function Slider({title, description, icon}) {
    return (
        <div>
            <div>
                {icon}
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}