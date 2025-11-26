import React from 'react';
import { BadgeVariant } from '@/types';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  new: 'bg-white/10 text-cmi-primary',
  beta: 'bg-white/10 text-cmi-accent',
  info: 'bg-white/5 text-cmi-text-secondary',
};

export const Badge: React.FC<BadgeProps> = ({ variant, children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

