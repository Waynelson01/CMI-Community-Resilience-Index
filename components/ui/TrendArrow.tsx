import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { TrendDirection } from '@/types';

interface TrendArrowProps {
  direction: TrendDirection;
  percent?: number;
  className?: string;
}

export const TrendArrow: React.FC<TrendArrowProps> = ({ direction, percent, className = '' }) => {
  const getColor = () => {
    if (direction === 'up') return 'text-cmi-high-risk';
    if (direction === 'down') return 'text-cmi-good';
    return 'text-cmi-accent';
  };
  
  const colorClass = getColor();
  
  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      {direction === 'up' && <TrendingUp className={`w-4 h-4 ${colorClass}`} />}
      {direction === 'down' && <TrendingDown className={`w-4 h-4 ${colorClass}`} />}
      {direction === 'flat' && <Minus className={`w-4 h-4 ${colorClass}`} />}
      {percent !== undefined && (
        <span className={`text-[13px] font-medium ${colorClass}`}>
          {direction === 'up' ? '▲' : direction === 'down' ? '▼' : '■'} {Math.abs(percent).toFixed(1)}%
        </span>
      )}
    </div>
  );
};
