import React from 'react'

export default function See({title, description, icon}) {
    return (
        <div className="see_list_card">
            <div className="see_logo_container">{icon}</div>
            <div className={"see_text_container"}>
                <h5 className="see_header">{title}</h5>
                <p className="see_description">{description}</p>
            </div>
        </div>
    );
}