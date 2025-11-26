import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Badge } from './Badge';

interface CardProps {
  title?: string;
  subtitle?: string;
  icon?: LucideIcon;
  badge?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'bright';
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  icon: Icon,
  badge,
  footer,
  children,
  className = '',
  onClick,
  variant = 'default',
}) => {
  const bgColor = variant === 'bright' ? 'bg-cmi-card-bright' : 'bg-cmi-card';
  
  return (
    <div
      className={`${bgColor} rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.45)] border border-cmi-border p-5 ${onClick ? 'cursor-pointer hover:bg-white/5 transition-colors' : ''} ${className}`}
      onClick={onClick}
    >
      {(title || subtitle || Icon || badge) && (
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-start gap-3">
            {Icon && <Icon className="w-4 h-4 text-cmi-primary mt-0.5 opacity-70" />}
            <div>
              {title && <h3 className="text-sm font-semibold text-white/90 leading-relaxed">{title}</h3>}
              {subtitle && <p className="text-[13px] text-cmi-text-muted mt-1">{subtitle}</p>}
            </div>
          </div>
          {badge && <Badge variant="info">{badge}</Badge>}
        </div>
      )}
      <div className="text-[13px] text-white/75">{children}</div>
      {footer && <div className="mt-4 pt-4 border-t border-cmi-border">{footer}</div>}
    </div>
  );
};
