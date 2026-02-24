import React from 'react';
import { LiquidGlass } from './LiquidGlass';

/**
 * Drop-in replacement for any Card component
 */
export const GlassCard = ({ title, description, children, highlight = false, className = '' }) => {
    return (
        <LiquidGlass
            intensity={highlight ? 15 : 10}
            className={`glass-card-root ${highlight ? 'highlight' : ''} ${className}`}
        >
            <div className="card-inner">
                {title && <h3 className="card-title">{title}</h3>}
                {description && <p className="card-desc">{description}</p>}
                {children}
            </div>
        </LiquidGlass>
    );
};

/**
 * Drop-in replacement for any Button component
 */
export const LiquidButton = ({ children, onClick, variant = 'primary', className = '' }) => {
    return (
        <LiquidGlass
            variant="slab"
            intensity={5}
            className={`liquid-button-root ${variant} ${className}`}
        >
            <button className="button-reset" onClick={onClick}>
                {children}
            </button>
        </LiquidGlass>
    );
};
