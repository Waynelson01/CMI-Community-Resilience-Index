import React from 'react';
import { Card } from '@/components/ui/Card';
import { TrendingUp, TrendingDown, Plus } from 'lucide-react';

interface SignalItem {
  label: string;
  value: string;
  color: 'red' | 'orange' | 'purple' | 'green' | 'teal';
  trend?: 'up' | 'down';
}

interface LiveSignalsCardProps {
  signals: SignalItem[];
  className?: string;
  showAddButton?: boolean;
  onAdd?: () => void;
}

/**
 * LiveSignalsCard - Reusable template for Live Signals panel
 * 
 * Follows CMI Design System:
 * - Bright card background (#152038)
 * - Colored dots for each signal
 * - Trend indicators with icons
 * - Values aligned to the right
 * - Add icon button on the right side
 */
export const LiveSignalsCard: React.FC<LiveSignalsCardProps> = ({
  signals,
  className = '',
  showAddButton = false,
  onAdd,
}) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-cmi-high-risk';
      case 'orange':
        return 'bg-cmi-moderate';
      case 'purple':
        return 'bg-purple-500';
      case 'green':
        return 'bg-cmi-good';
      case 'teal':
        return 'bg-cmi-accent';
      default:
        return 'bg-cmi-text-muted';
    }
  };

  return (
    <Card variant="bright" className={className}>
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
        <h3 className="text-sm font-semibold text-white/90">Live Signals</h3>
        {showAddButton && (
          <button
            onClick={onAdd}
            className="p-1.5 text-cmi-text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Add signal"
          >
            <Plus className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="space-y-3">
        {signals.map((signal, index) => (
          <div key={index} className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className={`w-2 h-2 rounded-full ${getColorClass(signal.color)} mt-2 flex-shrink-0`}></div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] text-white">{signal.label}</div>
                {signal.trend && (
                  <div className="text-[11px] text-cmi-text-muted flex items-center gap-1 mt-0.5">
                    {signal.trend === 'up' && <TrendingUp className="w-3 h-3" />}
                    {signal.trend === 'down' && <TrendingDown className="w-3 h-3" />}
                    {signal.trend === 'up' ? '▲' : '▼'}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="text-[13px] text-white font-medium">{signal.value}</span>
              {signal.trend && (
                <span className="text-[11px] text-cmi-text-muted">▲</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

