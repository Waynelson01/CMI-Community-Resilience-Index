'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DonutSegment {
  label: string;
  percentage: number;
  color: 'green' | 'yellow' | 'red';
}

interface ChainStage {
  id: number;
  label: string;
  timeframe: string;
  status: 'green' | 'yellow' | 'orange' | 'red';
}

interface RiskHighlight {
  title: string;
  description: string;
  color: 'red' | 'yellow' | 'green';
}

interface SystemOverviewCardProps {
  overallScore: number;
  maxScore?: number;
  donutSegments: DonutSegment[];
  departmentsOnTrack: number;
  departmentsAtRisk: number;
  majorBottlenecks: number;
  chainStages: ChainStage[];
  avgDelays: {
    issueToMinister: string;
    policyPhase: string;
    implementation: string;
  };
  riskHighlights: RiskHighlight[];
  className?: string;
}

/**
 * SystemOverviewCard - Template for System Overview dashboard
 * 
 * Follows CMI Design System:
 * - Dark card background (#111A2E)
 * - Donut chart visualization
 * - Chain of responsibility timeline
 * - Risk highlights with colored bullets
 */
export const SystemOverviewCard: React.FC<SystemOverviewCardProps> = ({
  overallScore,
  maxScore = 10,
  donutSegments,
  departmentsOnTrack,
  departmentsAtRisk,
  majorBottlenecks,
  chainStages,
  avgDelays,
  riskHighlights,
  className = '',
}) => {
  const [chainExpanded, setChainExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'green':
        return 'bg-cmi-good';
      case 'yellow':
        return 'bg-cmi-moderate';
      case 'orange':
        return 'bg-orange-500';
      case 'red':
        return 'bg-cmi-high-risk';
      default:
        return 'bg-cmi-text-muted';
    }
  };

  const getRiskColor = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-cmi-high-risk';
      case 'yellow':
        return 'bg-cmi-moderate';
      case 'green':
        return 'bg-cmi-good';
      default:
        return 'bg-cmi-text-muted';
    }
  };

  // Calculate donut chart
  const totalPercentage = donutSegments.reduce((sum, seg) => sum + seg.percentage, 0) || 100;
  const circumference = 2 * Math.PI * 45; // radius = 45
  
  // Calculate offsets for each segment
  const segmentOffsets = donutSegments.reduce((acc, segment, index) => {
    const prevOffset = index === 0 ? 0 : acc[index - 1].endOffset;
    const segmentLength = (segment.percentage / totalPercentage) * circumference;
    acc.push({
      ...segment,
      startOffset: prevOffset,
      endOffset: prevOffset + segmentLength,
      length: segmentLength,
    });
    return acc;
  }, [] as Array<DonutSegment & { startOffset: number; endOffset: number; length: number }>);

  return (
    <Card className={className}>
      <div className="space-y-6">
        {/* Overall Government Performance */}
        <div>
          <h3 className="text-sm font-semibold text-white/90 mb-4">OVERALL GOVERNMENT PERFORMANCE</h3>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="text-3xl font-bold text-white mb-1">
                {overallScore.toFixed(1)} / {maxScore}
              </div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide">Weighted Performance Score</div>
            </div>
            
            {/* Donut Chart */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                {segmentOffsets.map((segment, index) => {
                  const colorMap = {
                    green: '#4CAF50',
                    yellow: '#FFC940',
                    red: '#FF5252',
                  };

                  return (
                    <circle
                      key={index}
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={colorMap[segment.color]}
                      strokeWidth="8"
                      strokeDasharray={`${segment.length} ${circumference}`}
                      strokeDashoffset={-segment.startOffset}
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-xl font-bold text-white">{overallScore.toFixed(1)}</div>
                <div className="text-xs text-cmi-text-muted">/ {maxScore}</div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 space-y-2">
              {donutSegments.map((segment, index) => {
                const colorMap = {
                  green: 'bg-cmi-good',
                  yellow: 'bg-cmi-moderate',
                  red: 'bg-cmi-high-risk',
                };
                return (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${colorMap[segment.color]}`}></div>
                    <span className="text-[13px] text-cmi-text-secondary">
                      {segment.label}: {segment.percentage}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-cmi-border">
            <div>
              <div className="text-2xl font-bold text-cmi-good">{departmentsOnTrack}</div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mt-1">Departments on track</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cmi-moderate">{departmentsAtRisk}</div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mt-1">Departments at risk</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cmi-high-risk">{majorBottlenecks}</div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mt-1">Major bottlenecks</div>
            </div>
          </div>
        </div>

        {/* Chain of Responsibility */}
        <div>
          <button
            onClick={() => setChainExpanded(!chainExpanded)}
            className="flex items-center justify-between w-full mb-4"
          >
            <h3 className="text-sm font-semibold text-white/90">CHAIN OF RESPONSIBILITY</h3>
            <div className="flex items-center gap-2 text-[11px] text-cmi-text-muted">
              {chainExpanded ? 'Click to collapse' : 'Click to expand'}
              {chainExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {chainExpanded && (
            <div className="space-y-4">
              {/* Timeline */}
              <div className="relative">
                <div className="flex items-start">
                  {chainStages.map((stage, index) => (
                    <React.Fragment key={stage.id}>
                      <div className="flex flex-col items-center flex-1 relative">
                        <div className={`w-8 h-8 rounded-full ${getStatusColor(stage.status)} flex items-center justify-center text-white text-xs font-bold mb-2 z-10 relative`}>
                          {stage.id}
                        </div>
                        <div className="text-[11px] text-cmi-text-secondary text-center mb-1">{stage.label}</div>
                        <div className="text-[10px] text-cmi-text-muted text-center">({stage.timeframe})</div>
                      </div>
                      {index < chainStages.length - 1 && (
                        <div className="relative top-4 -mx-2 flex-1">
                          <div className={`h-0.5 ${
                            chainStages[index + 1].status === 'green' ? 'bg-cmi-good' :
                            chainStages[index + 1].status === 'yellow' ? 'bg-cmi-moderate' :
                            chainStages[index + 1].status === 'orange' ? 'bg-orange-500' :
                            'bg-cmi-high-risk'
                          }`}></div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Average Delays */}
              <div className="pt-4 border-t border-cmi-border space-y-2">
                <div className="text-[13px] text-cmi-text-secondary">
                  Avg delay Issue → Minister: <span className="text-white font-medium">{avgDelays.issueToMinister}</span>
                </div>
                <div className="text-[13px] text-cmi-text-secondary">
                  Policy phase Announcement → Bill: <span className="text-white font-medium">{avgDelays.policyPhase}</span>
                </div>
                <div className="text-[13px] text-cmi-text-secondary">
                  Implementation Delivery: <span className="text-white font-medium">{avgDelays.implementation}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Key Risk Highlights */}
        <div>
          <h3 className="text-sm font-semibold text-white/90 mb-4">KEY RISK HIGHLIGHTS</h3>
          <div className="space-y-3">
            {riskHighlights.map((risk, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full ${getRiskColor(risk.color)} mt-2 flex-shrink-0`}></div>
                <div className="flex-1">
                  <div className="text-[13px] font-medium text-white mb-1">{risk.title}</div>
                  <div className="text-[13px] text-cmi-text-secondary">{risk.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

