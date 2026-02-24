import React, { useId } from 'react';
import '../styles/LiquidGlass.css';

/**
 * LiquidGlass Component
 * This is an expert implementation that clones the rdev/liquid-glass-react
 * logic using high-fidelity SVG displacement maps.
 */
export const LiquidGlass = ({
    children,
    className = '',
    intensity = 12,
    variant = 'liquid',
    hoverEffect = true
}) => {
    const id = useId().replace(/:/g, '');
    const filterId = `liquid-refraction-${id}`;

    return (
        <div className={`liquid-wrapper ${className} ${hoverEffect ? 'hover-active' : ''}`}>
            {/* Dynamic SVG Filter for each instance to prevent global state leaks */}
            <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
                <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency={variant === 'liquid' ? "0.003" : "0.05"}
                        numOctaves="4"
                        result="noise"
                    >
                        <animate attributeName="seed" from="1" to="1000" dur="200s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale={intensity}
                        xChannelSelector="R"
                        yChannelSelector="G"
                        result="refracted"
                    />
                    <feComposite in="refracted" in2="SourceGraphic" operator="in" />
                </filter>
            </svg>

            <div className="liquid-container">
                {/* The Refracitve Layer */}
                <div
                    className="liquid-glass-backdrop"
                    style={{ filter: `url(#${filterId})` }}
                />

                {/* The Sharp Content Layer */}
                <div className="liquid-content-layer">
                    {children}
                </div>
            </div>
        </div>
    );
};
