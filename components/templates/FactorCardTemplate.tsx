import React from 'react';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface FactorCardTemplateProps {
  name: string;
  description: string;
  score: number;
  trend: 'up' | 'down' | 'flat';
  trendPercent: number;
  weight: number;
  highStressAreas: number;
  stateAverage: number;
  vsTarget: number;
  status: string;
  statusColor: 'danger' | 'warning' | 'success';
  className?: string;
}

/**
 * FactorCardTemplate - Reusable template for factor cards
 * 
 * Follows CMI Design System:
 * - Dark navy card background (#111A2E)
 * - Score circle with color coding
 * - Trend indicators with proper colors
 * - Status tags with semi-transparent backgrounds
 * - Consistent spacing and typography
 */
export const FactorCardTemplate: React.FC<FactorCardTemplateProps> = ({
  name,
  description,
  score,
  trend,
  trendPercent,
  weight,
  highStressAreas,
  stateAverage,
  vsTarget,
  status,
  statusColor,
  className = '',
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 70) return 'bg-[#FF525222] text-cmi-high-risk';
    if (score >= 50) return 'bg-[#FFC94022] text-cmi-moderate';
    return 'bg-[#4CAF5022] text-cmi-good';
  };

  return (
    <Card className={className}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white/90 mb-1">{name}</h3>
          <p className="text-[13px] text-cmi-text-muted mb-3">{description}</p>
          <div className="flex items-center gap-4 mb-3">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${getScoreColor(score)}`}>
              {score}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {trend === 'up' && <TrendingUp className="w-4 h-4 text-cmi-high-risk" />}
                {trend === 'down' && <TrendingDown className="w-4 h-4 text-cmi-good" />}
                {trend === 'flat' && <Minus className="w-4 h-4 text-cmi-accent" />}
                <span className={`text-[13px] font-medium ${
                  trend === 'up' ? 'text-cmi-high-risk' :
                  trend === 'down' ? 'text-cmi-good' :
                  'text-cmi-accent'
                }`}>
                  {trend === 'up' ? 'Rising' : trend === 'down' ? 'Easing' : 'Stable'}
                </span>
              </div>
              <div className="text-[11px] text-cmi-text-muted">
                ▲ - stress rising, ▼ - stress easing
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-[13px]">
            <div>
              <div className="text-cmi-text-muted">WEIGHT: {weight}%</div>
            </div>
            <div>
              <div className="text-cmi-text-muted">STATE AVERAGE: {stateAverage}/100</div>
            </div>
            <div>
              <div className="text-cmi-text-muted">HIGH STRESS AREAS: {highStressAreas}</div>
            </div>
            <div>
              <div className="text-cmi-text-muted">VS Target: +{vsTarget}% ↑</div>
            </div>
          </div>
        </div>
        <div>
          <Tag variant={statusColor} className="text-[11px]">
            {status}
          </Tag>
        </div>
      </div>
    </Card>
  );
};


