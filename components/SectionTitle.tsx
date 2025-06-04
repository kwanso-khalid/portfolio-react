
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-10 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-text-light-primary mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-light-tertiary">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
