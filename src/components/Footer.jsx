import React from 'react';

export default function Footer() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            background: 'var(--CTA)',
            gap: '5px',
            padding: '5px',
            color: 'grey',
        }
        }>
            <h6>Ready to discover your next crypto opportunity? </h6>
            <p> MagnetXt v1.0 • © 2025 </p>
        </div>
    )
}