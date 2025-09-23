import React from 'react';


export default function Updated() {
    const time = 2;
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'var(--primary)',
            borderRadius: '25px',
            padding: '0 8px',
        }}>
            <p style={{
                fontSize: '12px',
                fontWeight: 'bold',
                fontFamily: 'sans-serif',
            }}
            >Updated: {time} min ago</p>
        </div>
    )
}