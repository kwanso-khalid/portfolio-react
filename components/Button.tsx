import React from 'react';
import { Link, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

// Common props for all button variants
interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

// Props for when as='button' (default)
type ButtonSpecificProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'className' | 'children'> & {
  as?: 'button';
  type?: 'submit' | 'reset' | 'button';
  href?: undefined; // Not allowed
  to?: undefined;   // Not allowed
};

// Props for when as='a'
type AnchorSpecificProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'type' | 'className' | 'children'> & {
  as: 'a';
  href: string; // Required
  type?: undefined; // HTML 'type' for 'a' is for mimeType, not used here as button type
  to?: undefined;   // Not allowed
};

// Props for when as='Link'
type LinkSpecificProps = Omit<ReactRouterLinkProps, 'to' | 'className' | 'children'> & {
  as: 'Link';
  to: string; // Required
  href?: undefined; // Not allowed
  type?: undefined; // Not used
};

// Discriminated union for ButtonProps
export type ButtonProps = ButtonBaseProps & (ButtonSpecificProps | AnchorSpecificProps | LinkSpecificProps);

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', size = 'md', leftIcon, rightIcon, children, className } = props;

  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark transition-all duration-150 ease-in-out";
  
  const variantStyles = {
    primary: "bg-accent-blue hover:bg-accent-blue-hover text-white focus:ring-accent-blue",
    secondary: "bg-secondary-dark text-text-light-primary hover:bg-slate-700 border border-border-dark-neutral focus:ring-slate-500",
    outline: "bg-transparent text-accent-blue hover:bg-accent-blue/10 border border-accent-blue focus:ring-accent-blue",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`;

  const content = (
    <>
      {leftIcon && <span className="mr-2 -ml-1">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 -mr-1">{rightIcon}</span>}
    </>
  );

  if (props.as === 'a') {
    // props is correctly narrowed to ButtonBaseProps & AnchorSpecificProps
    // Destructure to separate consumed props from rest
    const { as, variant: v, size: s, leftIcon: li, rightIcon: ri, children: c, className: cn, href, ...anchorRest } = props;
    return (
      <a href={href} className={combinedClassName} {...anchorRest}>
        {content}
      </a>
    );
  }

  if (props.as === 'Link') {
    // props is correctly narrowed to ButtonBaseProps & LinkSpecificProps
    // Destructure to separate consumed props from rest
    const { as, variant: v, size: s, leftIcon: li, rightIcon: ri, children: c, className: cn, to, ...linkRest } = props;
    return (
      <Link to={to} className={combinedClassName} {...linkRest}>
        {content}
      </Link>
    );
  }

  // Default or props.as === 'button' or props.as is undefined
  // props is correctly narrowed to ButtonBaseProps & ButtonSpecificProps
  // Destructure to separate consumed props from rest
  const { as, variant: v, size: s, leftIcon: li, rightIcon: ri, children: c, className: cn, type, ...buttonRest } = props;
  return (
    <button type={type || 'button'} className={combinedClassName} {...buttonRest}>
      {content}
    </button>
  );
};

export default Button;