import React from 'react';
import { Tag } from './Tag';

interface LegendItem {
  label: string;
  variant: 'success' | 'warning' | 'danger' | 'neutral';
  icon?: React.ReactNode;
}

interface PillLegendProps {
  items: LegendItem[];
  title?: string;
  className?: string;
}

export const PillLegend: React.FC<PillLegendProps> = ({ items, title, className = '' }) => {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {title && <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{title}:</span>}
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          {item.icon}
          <Tag variant={item.variant}>{item.label}</Tag>
        </div>
      ))}
    </div>
  );
};

