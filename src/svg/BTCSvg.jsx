import React from 'react';

export default function BTCSvg({className}) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 256 256">
            <rect width="100%" height="100%" fill="none"/>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="200" fontWeight="700" fontFamily="Arial, 'Noto Sans', 'Segoe UI Symbol', sans-serif">₿</text>
        </svg>
    );
}