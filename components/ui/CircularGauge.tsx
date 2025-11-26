'use client';

import React from 'react';

interface CircularGaugeProps {
  value: number; // 0-100
  max?: number;
  label?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const CircularGauge: React.FC<CircularGaugeProps> = ({
  value,
  max = 100,
  label,
  subtitle,
  size = 'lg',
  showLabel = true,
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  };

  const getStatus = () => {
    if (percentage >= 70) return 'HIGH STRESS';
    if (percentage >= 50) return 'MEDIUM-HIGH STRESS';
    if (percentage >= 30) return 'MODERATE STRESS';
    return 'LOW STRESS';
  };

  const getStatusColor = () => {
    if (percentage >= 70) return '#FF5252';
    if (percentage >= 50) return '#FFC940';
    return '#4CAF50';
  };

  const status = getStatus();
  const statusColor = getStatusColor();

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClasses[size]}`}>
        <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="12"
          />
          {/* Progress circle with gradient */}
          <defs>
            <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF875F" />
              <stop offset="100%" stopColor="#E53E3E" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="url(#gauge-gradient)"
            strokeWidth="12"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold text-white">
            {value.toFixed(1)}
          </div>
          {max && (
            <div className="text-lg text-cmi-text-muted">/{max}</div>
          )}
        </div>
      </div>
      {showLabel && (
        <div className="mt-4 text-center">
          {label && <div className="text-[13px] text-cmi-text-secondary mb-1">{label}</div>}
          <div className="text-[11px] uppercase tracking-wide font-semibold mt-1" style={{ color: statusColor }}>
            {status}
          </div>
          {subtitle && <div className="text-[11px] text-cmi-text-muted mt-1">{subtitle}</div>}
        </div>
      )}
    </div>
  );
};


