import React from 'react';

const ProgressCircle = ({ progress }) => {
    const radius = 90;
    const stroke = 15;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const textTopPosition = radius - 20; 
    const textProgressPositionX = radius;
    const textProgressPositionY = radius + 6; 

    return (
        <div className="relative flex justify-center items-center w-auto h-auto mx-auto">
            
            <svg
                className="w-full h-full"
                height={radius * 3}
                width={radius * 3}
                style={{ transform: 'rotate(-180deg)' }}
            >
                <defs>
                    <linearGradient id="gradient" x1="100%" y1="50%" x2="10%" y2="15%">
                        <stop offset="10%" style={{ stopColor: '#3D2E7C', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#D1D3D4', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                <circle
                    className="text-blue-500 "
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    stroke="url(#gradient)"
                    fill="transparent"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset,
                        transition: 'stroke-dashoffset 0.35s',
                    }}
                />
                
                <text
                    x={textProgressPositionX}
                    y={textProgressPositionY}
                    fill="white"
                    className="text-[40px]"
                    fontSize="30px"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(180 ${radius} ${radius})`} // Rotaciona o texto inversamente ao SVG
                >
                    {progress}%
                </text>
            </svg>
        </div>
    );
};

export default ProgressCircle;