import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div
            className={[
                'rounded-xl border border-cyan/20 bg-navy p-6',
                'transition-all duration-300',
                'hover:border-cyan hover:shadow-lg hover:shadow-cyan/10',
                className,
            ].join(' ')}
        >
            {children}
        </div>
    );
}
