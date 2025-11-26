import React from 'react';
import { StatusVariant } from '@/types';

interface TagProps {
  variant: StatusVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<StatusVariant, string> = {
  success: 'bg-[#4CAF5022] text-[#4CAF50]',
  warning: 'bg-[#FFC94022] text-[#FFC940]',
  danger: 'bg-[#FF525222] text-[#FF5252]',
  neutral: 'bg-white/5 text-cmi-text-secondary',
};

export const Tag: React.FC<TagProps> = ({ variant, children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium uppercase tracking-wide ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
