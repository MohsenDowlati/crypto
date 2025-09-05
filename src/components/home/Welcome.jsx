import React from 'react';
import {MagnetSvg} from "@/svg";

export default function Welcome() {
    return (
        <div>
            <div>
                <MagnetSvg />
            </div>
            <div>
                <h1>Welcome to MagnetXt</h1>
                <p>
                    Your crypto analysis companion
                </p>
            </div>
        </div>
    );
}