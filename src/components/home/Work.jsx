import React from 'react';

export default function Work({id, description}) {
    return (
        <div className="work_list_card">
            <div className="work_logo_container">{id}</div>
            <p className="work_description">{description}</p>
        </div>
    )
}