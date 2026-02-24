import React, { useId } from 'react';
import './LiquidGlass.css';

/**
 * LiquidGlass Component
 * Replicates the high-end refractive glass effect seen in visionOS.
 */
export const LiquidGlass = ({
    children,
    className = '',
    intensity = 15,
    variant = 'liquid' // 'liquid' or 'slab'
}) => {
    const id = useId().replace(/:/g, '');
    const filterId = `liquid-filter-${id}`;

    return (
        <div className={`liquid-glass-container ${className}`} style={{ position: 'relative' }}>
            {/* Internal SVG Filter Definition */}
            <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
                <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency={variant === 'liquid' ? "0.012" : "0.05"}
                        numOctaves="4"
                        result="noise"
                    >
                        <animate attributeName="seed" from="1" to="1000" dur="120s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale={intensity}
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                    {variant === 'liquid' && (
                        <feColorMatrix
                            type="matrix"
                            values="1.05 0 0 0 0  0 1 0 0 0  0 0 0.95 0 0  0 0 0 1 0"
                        />
                    )}
                </filter>
            </svg>

            <div
                className="liquid-glass-content"
                style={{ filter: `url(#${filterId})` }}
            >
                {children}
            </div>
        </div>
    );
};
