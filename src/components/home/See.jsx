import React from 'react'

export default function See({title, description, icon}) {
    return (
        <div>
            <div>{icon}</div>
            <div>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}