import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
    variant?: ButtonVariant;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        'bg-cyan text-navy font-semibold hover:bg-cyan/90 focus:ring-cyan',
    secondary:
        'bg-navy text-cyan border border-cyan font-semibold hover:bg-cyan/10 focus:ring-cyan',
    outline:
        'bg-transparent text-cyan border border-cyan font-semibold hover:bg-cyan/10 focus:ring-cyan',
};

export function Button({
    variant = 'primary',
    onClick,
    children,
    className = '',
    type = 'button',
    disabled = false,
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={[
                'inline-flex items-center justify-center rounded-lg px-6 py-3',
                'text-sm transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                variantStyles[variant],
                className,
            ].join(' ')}
        >
            {children}
        </button>
    );
}
