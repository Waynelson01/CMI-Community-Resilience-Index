import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { TrendArrow } from '@/components/ui/TrendArrow';
import { Tag } from '@/components/ui/Tag';
import { CircularGauge } from '@/components/ui/CircularGauge';
import { FactorCardTemplate } from '@/components/templates/FactorCardTemplate';
import { LiveSignalsCard } from '@/components/templates/LiveSignalsCard';
import { lastDataUpdate } from '@/lib/mockData';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const overallScore = 66.8; // CRI Overall Score

  // Factor data matching the design
  const featuredFactors = [
    {
      id: 'housing',
      name: 'Housing Stress',
      description: 'Affordability, rental stress, and housing supply',
      score: 74,
      trend: 'up',
      trendPercent: 14,
      weight: 25,
      highStressAreas: 42,
      status: 'HIGH RISK',
      statusColor: 'danger' as const,
    },
    {
      id: 'crime-safety',
      name: 'Crime & Safety',
      description: 'Crime rates and safety metrics',
      score: 69,
      trend: 'up',
      trendPercent: 9,
      weight: 20,
      highStressAreas: 38,
      status: 'MODERATE',
      statusColor: 'warning' as const,
    },
    {
      id: 'cost-of-living',
      name: 'Cost of Living',
      description: 'Living costs and financial stress',
      score: 78,
      trend: 'up',
      trendPercent: 18,
      weight: 15,
      highStressAreas: 56,
      status: 'HIGH RISK',
      statusColor: 'danger' as const,
    },
    {
      id: 'transport-accessibility',
      name: 'Transport & Accessibility',
      description: 'Public transport and commute times',
      score: 67,
      trend: 'flat',
      trendPercent: 7,
      weight: 12,
      highStressAreas: 34,
      status: 'MODERATE',
      statusColor: 'warning' as const,
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-cmi-high-risk';
    if (score >= 50) return 'text-cmi-moderate';
    return 'text-cmi-good';
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-white">Community Resilience Index - Overview</h1>
          <p className="text-[13px] text-cmi-text-muted mt-1">State-wide stress overview and trending analysis</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-[11px] text-cmi-text-muted uppercase tracking-wider">LIVE DATA</div>
            <div className="text-[13px] text-white font-medium">
              Last updated: {new Date(lastDataUpdate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white/8 text-white rounded-lg text-[13px] font-medium">State View</button>
            <button className="px-4 py-2 bg-white/5 text-cmi-text-secondary rounded-lg text-[13px] font-medium hover:bg-white/10">Suburb View</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - CRI Overall Score */}
        <div className="lg:col-span-5">
          <Card>
            <div className="text-center mb-4">
              <h2 className="text-sm font-semibold text-white/90 mb-2">CRI - Overall Score</h2>
            </div>
            <CircularGauge
              value={overallScore}
              max={100}
              subtitle="Higher = more community stress"
              size="lg"
            />
            <div className="mt-6 space-y-2 text-[13px]">
              <div className="flex justify-between text-cmi-text-secondary">
                <span>128 LGAs analyzed</span>
              </div>
              <div className="flex justify-between text-cmi-text-secondary">
                <span>8.2M population covered</span>
              </div>
              <div className="flex justify-between text-cmi-text-secondary">
                <span>13 weighted factors</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-cmi-border flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cmi-high-risk"></div>
                <span className="text-[11px] text-cmi-text-muted">High</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cmi-moderate"></div>
                <span className="text-[11px] text-cmi-text-muted">Moderate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cmi-good"></div>
                <span className="text-[11px] text-cmi-text-muted">Good</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Middle Column - Factor Cards */}
        <div className="lg:col-span-4 space-y-4">
          {featuredFactors.map((factor) => (
            <FactorCardTemplate
              key={factor.id}
              name={factor.name}
              description={factor.description}
              score={factor.score}
              trend={factor.trend}
              trendPercent={factor.trendPercent}
              weight={factor.weight}
              highStressAreas={factor.highStressAreas}
              stateAverage={factor.score}
              vsTarget={factor.trendPercent}
              status={factor.status}
              statusColor={factor.statusColor}
            />
          ))}
        </div>

        {/* Right Column - Live Signals & Data Sources */}
        <div className="lg:col-span-3 space-y-4">
          {/* Live Signals Card */}
          <LiveSignalsCard
            signals={[
              {
                label: 'High Stress Areas',
                value: '42',
                color: 'red',
                trend: 'up',
              },
              {
                label: 'Avg CRI Trend',
                value: '+3.2%',
                color: 'orange',
                trend: 'up',
              },
              {
                label: 'Data Updates',
                value: '24h ago',
                color: 'purple',
              },
              {
                label: 'Improving Areas',
                value: '+8 new',
                color: 'green',
              },
            ]}
          />

          {/* Data Sources Card */}
          <Card variant="bright">
            <h3 className="text-sm font-semibold text-white/90 mb-4 pb-2 border-b border-white/5">Data Sources</h3>
            <p className="text-[13px] text-cmi-text-secondary mb-4">
              Community Resilience Index data is compiled from multiple government and statistical sources to provide comprehensive coverage of community stress indicators across NSW.
            </p>
            <ul className="space-y-2 text-[13px] text-cmi-text-secondary mb-4">
              <li>• ABS Census - Demographic and housing data</li>
              <li>• NSW Health - Health outcomes and access</li>
              <li>• NSW Police - Crime and safety statistics</li>
              <li>• Bureau of Statistics - Economic indicators</li>
              <li>• Transport NSW - Accessibility metrics</li>
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 rounded-xl bg-white/5 hover:bg-white/10 text-[13px] text-white/80 px-3 py-2 transition-colors"
            >
              Scoring Formula <ArrowRight className="w-3 h-3" />
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
