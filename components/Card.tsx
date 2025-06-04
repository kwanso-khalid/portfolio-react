import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
  id?: string; // Added id prop
}

const Card: React.FC<CardProps> = ({ children, className, onClick, hoverEffect = false, id }) => {
  const baseClasses = "bg-secondary-dark rounded-lg shadow-lg p-6";
  const hoverClasses = hoverEffect ? "transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:border-accent-blue/50 border border-transparent" : "border border-border-dark-neutral";
  
  return (
    <div
      id={id} // Pass id to the div
      className={`${baseClasses} ${hoverClasses} ${className || ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
    >
      {children}
    </div>
  );
};

export default Card;