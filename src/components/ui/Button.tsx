'use client';

import { useCallback } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseClasses = "text-center rounded-md text-sm font-medium transition-all duration-300";

  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:translate-y-[-2px] hover:shadow-lg",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
  };

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (onClick) {
      onClick();
    }
  }, [href, onClick]);

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={allClasses}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={allClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
