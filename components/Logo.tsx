
import React from 'react';
import { HexagonIcon } from './icons'; 
import { SITE_NAME } from '../constants';

const Logo: React.FC<{ size?: 'small' | 'normal' }> = ({ size = 'normal' }) => {
  const iconSize = size === 'small' ? 'h-6 w-6' : 'h-8 w-8';
  const textSize = size === 'small' ? 'text-xl' : 'text-2xl';

  return (
    <div className="flex items-center space-x-2">
      <HexagonIcon className={`${iconSize} text-accent-blue`} />
      <span className={`${textSize} font-bold text-text-light-primary`}>{SITE_NAME}</span>
    </div>
  );
};

export default Logo;
