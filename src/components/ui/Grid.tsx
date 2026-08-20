import React from 'react';

type GridCols = 1 | 2 | 3 | 4;

interface GridProps {
    children: React.ReactNode;
    cols?: GridCols;
    gap?: string;
    className?: string;
}

const colStyles: Record<GridCols, string> = {
    1: 'grid grid-cols-1',
    2: 'grid grid-cols-1 md:grid-cols-2',
    3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

export function Grid({ children, cols = 3, gap = 'gap-6', className = '' }: GridProps) {
    return (
        <div className={[colStyles[cols], gap, className].join(' ')}>
            {children}
        </div>
    );
}
