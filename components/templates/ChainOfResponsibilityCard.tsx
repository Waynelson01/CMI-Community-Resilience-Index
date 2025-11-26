'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';

interface ChainStage {
  id: number;
  title: string;
  timeframe: string;
  description: string;
  status: 'green' | 'yellow' | 'orange' | 'red';
}

interface DelayMetric {
  label: string;
  value: string;
  range: string;
  description: string;
}

interface Insight {
  text: string;
}

interface ChainOfResponsibilityCardProps {
  title?: string;
  subtitle?: string;
  stages: ChainStage[];
  delayMetrics: DelayMetric[];
  insights: Insight[];
  className?: string;
}

/**
 * ChainOfResponsibilityCard - Template for Chain of Responsibility dashboard
 * 
 * Follows CMI Design System:
 * - Dark card background (#111A2E)
 * - Horizontal process flow diagram
 * - Delay metric cards
 * - Key insights section
 */
export const ChainOfResponsibilityCard: React.FC<ChainOfResponsibilityCardProps> = ({
  title = 'Chain of Responsibility',
  subtitle = 'Detailed view of the government decision-making and implementation process, showing how issues flow from frontline data through to final delivery.',
  stages,
  delayMetrics,
  insights,
  className = '',
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'green':
        return 'bg-cmi-good border-cmi-good';
      case 'yellow':
        return 'bg-cmi-moderate border-cmi-moderate';
      case 'orange':
        return 'bg-orange-500 border-orange-500';
      case 'red':
        return 'bg-cmi-high-risk border-cmi-high-risk';
      default:
        return 'bg-cmi-text-muted border-cmi-text-muted';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'green':
        return 'text-cmi-good';
      case 'yellow':
        return 'text-cmi-moderate';
      case 'orange':
        return 'text-orange-500';
      case 'red':
        return 'text-cmi-high-risk';
      default:
        return 'text-cmi-text-muted';
    }
  };

  return (
    <Card className={className}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
          {subtitle && (
            <p className="text-[13px] text-cmi-text-secondary">{subtitle}</p>
          )}
        </div>

        {/* Process Flow Diagram */}
        <div className="space-y-4">
          <div className="relative">
            <div className="flex items-start gap-2">
              {stages.map((stage, index) => (
                <React.Fragment key={stage.id}>
                  <div className="flex flex-col items-center flex-1 min-w-0">
                    <div className={`w-10 h-10 rounded-full ${getStatusColor(stage.status)} border-2 flex items-center justify-center text-white text-sm font-bold mb-3 relative z-10`}>
                      {stage.id}
                    </div>
                    <div className="text-center mb-2">
                      <div className="text-sm font-semibold text-white/90 mb-1">{stage.title}</div>
                      <div className={`text-[11px] font-medium ${getStatusTextColor(stage.status)} mb-2`}>
                        ({stage.timeframe})
                      </div>
                      <div className="text-[12px] text-cmi-text-secondary leading-relaxed">
                        {stage.description}
                      </div>
                    </div>
                  </div>
                  {index < stages.length - 1 && (
                    <div className="relative top-5 -mx-1 flex-1 min-w-[20px]">
                      <div className={`h-0.5 ${
                        stages[index + 1].status === 'green' ? 'bg-cmi-good' :
                        stages[index + 1].status === 'yellow' ? 'bg-cmi-moderate' :
                        stages[index + 1].status === 'orange' ? 'bg-orange-500' :
                        'bg-cmi-high-risk'
                      }`}></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Delay Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-cmi-border">
          {delayMetrics.map((metric, index) => (
            <div key={index} className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-2">{metric.label}</div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-[12px] text-cmi-accent mb-2">({metric.range})</div>
              <div className="text-[12px] text-cmi-text-secondary">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="pt-4 border-t border-cmi-border">
          <h3 className="text-sm font-semibold text-white/90 mb-4">Key Insights</h3>
          <ul className="space-y-2">
            {insights.map((insight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-cmi-accent mt-1">•</span>
                <span className="text-[13px] text-cmi-text-secondary">{insight.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

