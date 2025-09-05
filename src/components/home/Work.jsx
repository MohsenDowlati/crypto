import React from 'react';

export default function Work({id, description}) {
    return (
        <div>
            <div>{id}</div>
            <p>{description}</p>
        </div>
    )
}