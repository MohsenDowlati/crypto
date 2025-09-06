import React from 'react';
import {MagnetSvg} from "@/svg";

export default function Welcome() {
    return (
        <div className="welcome_container">
            <div className="welcome_logo_container">
                <MagnetSvg className="welcome_logo" />
            </div>
            <div>
                <h1 className="welcome_header">Welcome to MagnetXt</h1>
                <p className="welcome_description">
                    Your crypto analysis companion
                </p>
            </div>
        </div>
    );
}