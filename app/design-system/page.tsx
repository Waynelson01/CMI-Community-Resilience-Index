'use client';

import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { Badge } from '@/components/ui/Badge';
import { TrendArrow } from '@/components/ui/TrendArrow';
import { CircularGauge } from '@/components/ui/CircularGauge';
import { PageHeader } from '@/components/ui/PageHeader';
import { FactorCardTemplate } from '@/components/templates/FactorCardTemplate';
import { LiveSignalsCard } from '@/components/templates/LiveSignalsCard';
import { SystemOverviewCard } from '@/components/templates/SystemOverviewCard';
import { ChainOfResponsibilityCard } from '@/components/templates/ChainOfResponsibilityCard';
import { TrendingUp, TrendingDown, Minus, ArrowRight, Info, AlertCircle } from 'lucide-react';

export default function DesignSystemPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="CMI Design System"
        subtitle="Complete component library and style guide for Community Resilience Index"
      />

      {/* Color Palette */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Color Palette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <div className="space-y-3">
              <div className="w-full h-20 rounded-lg bg-cmi-bg border border-cmi-border"></div>
              <div>
                <div className="text-sm font-semibold text-white/90">Background Primary</div>
                <div className="text-[13px] text-cmi-text-muted">#0B1220</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="space-y-3">
              <div className="w-full h-20 rounded-lg bg-cmi-sidebar border border-cmi-border"></div>
              <div>
                <div className="text-sm font-semibold text-white/90">Sidebar Background</div>
                <div className="text-[13px] text-cmi-text-muted">#0D1629</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="space-y-3">
              <div className="w-full h-20 rounded-lg bg-cmi-card border border-cmi-border"></div>
              <div>
                <div className="text-sm font-semibold text-white/90">Card Background</div>
                <div className="text-[13px] text-cmi-text-muted">#111A2E</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="space-y-3">
              <div className="w-full h-20 rounded-lg bg-cmi-card-bright border border-cmi-border"></div>
              <div>
                <div className="text-sm font-semibold text-white/90">Card Bright</div>
                <div className="text-[13px] text-cmi-text-muted">#152038</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="space-y-3">
              <div className="w-full h-20 rounded-lg bg-cmi-primary border border-cmi-border"></div>
              <div>
                <div className="text-sm font-semibold text-white/90">Primary Accent</div>
                <div className="text-[13px] text-cmi-text-muted">#FF7A45</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="space-y-3">
              <div className="w-full h-20 rounded-lg bg-cmi-accent border border-cmi-border"></div>
              <div>
                <div className="text-sm font-semibold text-white/90">Secondary Accent</div>
                <div className="text-[13px] text-cmi-text-muted">#4DD7FA</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="space-y-3">
              <div className="w-full h-20 rounded-lg bg-cmi-high-risk border border-cmi-border"></div>
              <div>
                <div className="text-sm font-semibold text-white/90">High Risk</div>
                <div className="text-[13px] text-cmi-text-muted">#FF5252</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="space-y-3">
              <div className="w-full h-20 rounded-lg bg-cmi-moderate border border-cmi-border"></div>
              <div>
                <div className="text-sm font-semibold text-white/90">Moderate</div>
                <div className="text-[13px] text-cmi-text-muted">#FFC940</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="space-y-3">
              <div className="w-full h-20 rounded-lg bg-cmi-good border border-cmi-border"></div>
              <div>
                <div className="text-sm font-semibold text-white/90">Good</div>
                <div className="text-[13px] text-cmi-text-muted">#4CAF50</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Typography</h2>
        <Card>
          <div className="space-y-4">
            <div>
              <div className="text-2xl font-semibold text-white mb-2">Page Title</div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide">text-2xl font-semibold text-white</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/90 mb-2">Card Title</div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide">text-sm font-semibold text-white/90</div>
            </div>
            <div>
              <div className="text-[13px] text-white/75 mb-2">Body Text</div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide">text-[13px] text-white/75</div>
            </div>
            <div>
              <div className="text-[13px] text-cmi-text-secondary mb-2">Secondary Text</div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide">text-[13px] text-cmi-text-secondary</div>
            </div>
            <div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-2">Muted Label</div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide">text-[11px] text-cmi-text-muted uppercase tracking-wide</div>
            </div>
          </div>
        </Card>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-sm font-semibold text-white/90 mb-2">Default Card</h3>
            <p className="text-[13px] text-white/75">
              Standard card with bg-cmi-card (#111A2E), rounded-2xl, shadow-[0_6px_20px_rgba(0,0,0,0.45)], border border-cmi-border, p-5
            </p>
          </Card>
          <Card variant="bright">
            <h3 className="text-sm font-semibold text-white/90 mb-2">Bright Card</h3>
            <p className="text-[13px] text-white/75">
              Bright variant with bg-cmi-card-bright (#152038) for right-rail panels like Live Signals and Data Sources
            </p>
          </Card>
        </div>
      </section>

      {/* Status Tags & Badges */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Status Tags & Badges</h2>
        <Card>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-semibold text-white/90 mb-3">Status Tags</div>
              <div className="flex flex-wrap gap-3">
                <Tag variant="danger">HIGH RISK</Tag>
                <Tag variant="warning">MODERATE</Tag>
                <Tag variant="success">GOOD</Tag>
                <Tag variant="neutral">NEUTRAL</Tag>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/90 mb-3">Badges</div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="new">NEW</Badge>
                <Badge variant="beta">BETA</Badge>
                <Badge variant="info">INFO</Badge>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Trend Arrows */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Trend Indicators</h2>
        <Card>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <TrendArrow direction="up" percent={14} />
              <span className="text-[13px] text-cmi-text-muted">Rising (Red)</span>
            </div>
            <div className="flex items-center gap-4">
              <TrendArrow direction="down" percent={5} />
              <span className="text-[13px] text-cmi-text-muted">Falling (Green)</span>
            </div>
            <div className="flex items-center gap-4">
              <TrendArrow direction="flat" percent={0} />
              <span className="text-[13px] text-cmi-text-muted">Stable (Teal/Blue)</span>
            </div>
          </div>
        </Card>
      </section>

      {/* Score Rings */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Score Rings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="text-center">
              <CircularGauge value={66.8} max={100} subtitle="Higher = more community stress" size="lg" />
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <CircularGauge value={74} max={100} subtitle="High Stress" size="md" />
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <CircularGauge value={45} max={100} subtitle="Moderate Stress" size="sm" />
            </div>
          </Card>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Buttons</h2>
        <Card>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-semibold text-white/90 mb-3">Primary Actions</div>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-cmi-high-risk hover:bg-[#FF5252]/80 text-white rounded-lg text-[13px] font-medium transition-colors">
                  Get Report
                </button>
                <button className="px-4 py-2 bg-cmi-primary hover:bg-[#FF7A45]/80 text-white rounded-lg text-[13px] font-medium transition-colors">
                  Primary Action
                </button>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/90 mb-3">Secondary Actions</div>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-white/8 text-white rounded-lg text-[13px] font-medium hover:bg-white/10 transition-colors">
                  State View
                </button>
                <button className="px-4 py-2 bg-white/5 text-cmi-text-secondary rounded-lg text-[13px] font-medium hover:bg-white/10 transition-colors">
                  Suburb View
                </button>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/90 mb-3">Link Buttons</div>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-1 rounded-xl bg-white/5 hover:bg-white/10 text-[13px] text-white/80 px-3 py-2 transition-colors">
                  Scoring Formula <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Right Panel Style */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Right Panel Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="bright">
            <h3 className="text-sm font-semibold text-white/90 mb-4 pb-2 border-b border-white/5">Live Signals</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cmi-high-risk mt-2"></div>
                <div>
                  <div className="text-[13px] text-white">High Stress Areas: 42</div>
                  <div className="text-[11px] text-cmi-text-muted flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> ▲
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cmi-moderate mt-2"></div>
                <div>
                  <div className="text-[13px] text-white">Avg CRI Trend: +3.2%</div>
                  <div className="text-[11px] text-cmi-text-muted flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> ▲
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card variant="bright">
            <h3 className="text-sm font-semibold text-white/90 mb-4 pb-2 border-b border-white/5">Data Sources</h3>
            <p className="text-[13px] text-cmi-text-secondary mb-4">
              Community Resilience Index data is compiled from multiple government and statistical sources.
            </p>
            <ul className="space-y-2 text-[13px] text-cmi-text-secondary mb-4">
              <li>• ABS Census - Demographic and housing data</li>
              <li>• NSW Health - Health outcomes and access</li>
              <li>• NSW Police - Crime and safety statistics</li>
            </ul>
            <button className="inline-flex items-center gap-1 rounded-xl bg-white/5 hover:bg-white/10 text-[13px] text-white/80 px-3 py-2 transition-colors">
              Scoring Formula <ArrowRight className="w-3 h-3" />
            </button>
          </Card>
        </div>
      </section>

      {/* Live Signals Card Template */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Live Signals Card</h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-white/90 mb-2">Live Signals Card Template</h3>
              <p className="text-[13px] text-cmi-text-muted mb-4">
                The Live Signals Card displays real-time indicators and metrics. It uses a bright card variant and features colored dots for visual categorization of different signal types.
              </p>
            </div>
            
            {/* Live Example */}
            <div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Live Example</div>
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
                showAddButton={true}
              />
            </div>

            {/* Component Structure */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Component Structure</div>
              <div className="space-y-3 text-[13px] text-cmi-text-secondary">
                <div>
                  <div className="font-semibold text-white/90 mb-1">Required Props:</div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><code className="text-cmi-accent">signals</code> - Array of signal items (SignalItem[])</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-white/90 mb-1">SignalItem Interface:</div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><code className="text-cmi-accent">label</code> - Signal label text (string)</li>
                    <li><code className="text-cmi-accent">value</code> - Signal value/status (string)</li>
                    <li><code className="text-cmi-accent">color</code> - Dot color: 'red' | 'orange' | 'purple' | 'green' | 'teal'</li>
                    <li><code className="text-cmi-accent">trend</code> - Optional: 'up' | 'down' (string)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Usage Example */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Usage Example</div>
              <pre className="text-[11px] text-cmi-text-secondary overflow-x-auto">
{`import { LiveSignalsCard } from '@/components/templates/LiveSignalsCard';

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
/>`}
              </pre>
            </div>

            {/* Design Specifications */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Design Specifications</div>
              <div className="space-y-2 text-[13px] text-cmi-text-secondary">
                <div>• Card variant: <code className="text-cmi-accent">bright</code> (bg-cmi-card-bright #152038)</div>
                <div>• Header: text-sm font-semibold with border-b border-white/5 separator</div>
                <div>• Dot colors: red (high-risk), orange (moderate), purple (neutral), green (good), teal (accent)</div>
                <div>• Typography: text-[13px] for labels/values, text-[11px] for trend indicators</div>
                <div>• Spacing: space-y-3 between items, gap-3 for flex items</div>
                <div>• Trend icons: TrendingUp/TrendingDown with ▲/▼ symbols</div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Factor Card Template */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Factor Card</h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-white/90 mb-2">Factor Card Template</h3>
              <p className="text-[13px] text-cmi-text-muted mb-4">
                The Factor Card is the standard template for displaying individual factor metrics throughout the dashboard. All factor cards must follow this exact structure, spacing, and styling to maintain visual consistency.
              </p>
            </div>
            
            {/* Live Example */}
            <div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Live Example</div>
              <FactorCardTemplate
                name="Housing Stress"
                description="Affordability, rental stress, and housing supply"
                score={74}
                trend="up"
                trendPercent={14}
                weight={25}
                highStressAreas={42}
                stateAverage={74}
                vsTarget={14}
                status="HIGH RISK"
                statusColor="danger"
              />
            </div>

            {/* Component Structure */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Component Structure</div>
              <div className="space-y-3 text-[13px] text-cmi-text-secondary">
                <div>
                  <div className="font-semibold text-white/90 mb-1">Required Props:</div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><code className="text-cmi-accent">name</code> - Factor name (string)</li>
                    <li><code className="text-cmi-accent">description</code> - Factor description (string)</li>
                    <li><code className="text-cmi-accent">score</code> - Score value 0-100 (number)</li>
                    <li><code className="text-cmi-accent">trend</code> - 'up' | 'down' | 'flat' (string)</li>
                    <li><code className="text-cmi-accent">trendPercent</code> - Trend percentage (number)</li>
                    <li><code className="text-cmi-accent">weight</code> - Weight percentage (number)</li>
                    <li><code className="text-cmi-accent">highStressAreas</code> - Number of high stress areas (number)</li>
                    <li><code className="text-cmi-accent">stateAverage</code> - State average score (number)</li>
                    <li><code className="text-cmi-accent">vsTarget</code> - VS Target percentage (number)</li>
                    <li><code className="text-cmi-accent">status</code> - Status label (string)</li>
                    <li><code className="text-cmi-accent">statusColor</code> - 'danger' | 'warning' | 'success' (string)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Usage Example */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Usage Example</div>
              <pre className="text-[11px] text-cmi-text-secondary overflow-x-auto">
{`import { FactorCardTemplate } from '@/components/templates/FactorCardTemplate';

<FactorCardTemplate
  name="Housing Stress"
  description="Affordability, rental stress, and housing supply"
  score={74}
  trend="up"
  trendPercent={14}
  weight={25}
  highStressAreas={42}
  stateAverage={74}
  vsTarget={14}
  status="HIGH RISK"
  statusColor="danger"
/>`}
              </pre>
            </div>

            {/* Design Specifications */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Design Specifications</div>
              <div className="space-y-2 text-[13px] text-cmi-text-secondary">
                <div>• Card background: <code className="text-cmi-accent">bg-cmi-card</code> (#111A2E)</div>
                <div>• Score circle: Color-coded based on score (red ≥70, orange ≥50, green &lt;50)</div>
                <div>• Trend indicator: Red for rising, green for falling, teal for stable</div>
                <div>• Status tag: Semi-transparent background with colored text</div>
                <div>• Typography: text-sm for title, text-[13px] for body, text-[11px] for labels</div>
                <div>• Spacing: p-5 padding, gap-4 between elements, space-y-3 for lists</div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* System Overview Card Template */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">System Overview</h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-white/90 mb-2">System Overview Card Template</h3>
              <p className="text-[13px] text-cmi-text-muted mb-4">
                The System Overview card displays aggregated performance data across government departments, ministers, and MPs. It includes a donut chart, chain of responsibility timeline, and key risk highlights.
              </p>
            </div>
            
            {/* Live Example */}
            <div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Live Example</div>
              <SystemOverviewCard
                overallScore={6.1}
                maxScore={10}
                donutSegments={[
                  { label: 'On track', percentage: 35, color: 'green' },
                  { label: 'Delayed', percentage: 40, color: 'yellow' },
                  { label: 'Critical', percentage: 25, color: 'red' },
                ]}
                departmentsOnTrack={18}
                departmentsAtRisk={9}
                majorBottlenecks={7}
                chainStages={[
                  { id: 1, label: 'Frontline data', timeframe: '0-1mo', status: 'green' },
                  { id: 2, label: 'Agency KPIs', timeframe: '1-2mo', status: 'green' },
                  { id: 3, label: 'Minister', timeframe: '2-3mo', status: 'yellow' },
                  { id: 4, label: 'Cabinet / Parliament', timeframe: '3-8mo', status: 'orange' },
                  { id: 5, label: 'Law / Policy', timeframe: '8-12mo', status: 'red' },
                  { id: 6, label: 'Implementation', timeframe: '12mo+', status: 'red' },
                ]}
                avgDelays={{
                  issueToMinister: '3.4 months',
                  policyPhase: '8.7 months',
                  implementation: '2.9 years',
                }}
                riskHighlights={[
                  {
                    title: 'Health portfolio stress',
                    description: 'ED wait times and ambulance ramping above target across multiple regions.',
                    color: 'red',
                  },
                  {
                    title: 'Transport project delays',
                    description: 'Major rail and road upgrades trending beyond original timeframes.',
                    color: 'yellow',
                  },
                  {
                    title: 'Justice complaints backlog',
                    description: 'Complaint resolution times increasing despite extra funding.',
                    color: 'green',
                  },
                ]}
              />
            </div>

            {/* Component Structure */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Component Structure</div>
              <div className="space-y-3 text-[13px] text-cmi-text-secondary">
                <div>
                  <div className="font-semibold text-white/90 mb-1">Required Props:</div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><code className="text-cmi-accent">overallScore</code> - Overall performance score (number)</li>
                    <li><code className="text-cmi-accent">maxScore</code> - Maximum score (number, default: 10)</li>
                    <li><code className="text-cmi-accent">donutSegments</code> - Array of donut chart segments</li>
                    <li><code className="text-cmi-accent">departmentsOnTrack</code> - Number of departments on track (number)</li>
                    <li><code className="text-cmi-accent">departmentsAtRisk</code> - Number of departments at risk (number)</li>
                    <li><code className="text-cmi-accent">majorBottlenecks</code> - Number of major bottlenecks (number)</li>
                    <li><code className="text-cmi-accent">chainStages</code> - Array of chain of responsibility stages</li>
                    <li><code className="text-cmi-accent">avgDelays</code> - Object with average delay metrics</li>
                    <li><code className="text-cmi-accent">riskHighlights</code> - Array of risk highlight items</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Usage Example */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Usage Example</div>
              <pre className="text-[11px] text-cmi-text-secondary overflow-x-auto">
{`import { SystemOverviewCard } from '@/components/templates/SystemOverviewCard';

<SystemOverviewCard
  overallScore={6.1}
  maxScore={10}
  donutSegments={[
    { label: 'On track', percentage: 35, color: 'green' },
    { label: 'Delayed', percentage: 40, color: 'yellow' },
    { label: 'Critical', percentage: 25, color: 'red' },
  ]}
  departmentsOnTrack={18}
  departmentsAtRisk={9}
  majorBottlenecks={7}
  chainStages={[...]}
  avgDelays={{
    issueToMinister: '3.4 months',
    policyPhase: '8.7 months',
    implementation: '2.9 years',
  }}
  riskHighlights={[...]}
/>`}
              </pre>
            </div>

            {/* Design Specifications */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Design Specifications</div>
              <div className="space-y-2 text-[13px] text-cmi-text-secondary">
                <div>• Card background: <code className="text-cmi-accent">bg-cmi-card</code> (#111A2E)</div>
                <div>• Donut chart: SVG-based with colored segments (green, yellow, red)</div>
                <div>• Chain timeline: Horizontal layout with colored stage indicators</div>
                <div>• Risk highlights: Colored bullet points with titles and descriptions</div>
                <div>• Collapsible sections: Chain of responsibility can be expanded/collapsed</div>
                <div>• Typography: text-sm for headings, text-[13px] for body, text-[11px] for labels</div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Chain of Responsibility Card Template */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Chain of Responsibility</h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-white/90 mb-2">Chain of Responsibility Card Template</h3>
              <p className="text-[13px] text-cmi-text-muted mb-4">
                The Chain of Responsibility card displays a detailed view of the government decision-making and implementation process, showing how issues flow from frontline data through to final delivery. It includes a process flow diagram, delay metrics, and key insights.
              </p>
            </div>
            
            {/* Live Example */}
            <div>
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Live Example</div>
              <ChainOfResponsibilityCard
                stages={[
                  {
                    id: 1,
                    title: 'Frontline data',
                    timeframe: '0-1mo',
                    description: 'Data collection from service delivery points, community feedback, and operational metrics.',
                    status: 'green',
                  },
                  {
                    id: 2,
                    title: 'Agency KPIs',
                    timeframe: '1-2mo',
                    description: 'Departmental analysis, KPI compilation, and internal reporting.',
                    status: 'green',
                  },
                  {
                    id: 3,
                    title: 'Minister',
                    timeframe: '2-3mo',
                    description: 'Ministerial briefings, portfolio review, and decision-making.',
                    status: 'yellow',
                  },
                  {
                    id: 4,
                    title: 'Cabinet / Parliament',
                    timeframe: '3-8mo',
                    description: 'Cabinet submissions, parliamentary debate, and policy approval.',
                    status: 'orange',
                  },
                  {
                    id: 5,
                    title: 'Law / Policy Implementation',
                    timeframe: '8-12mo',
                    description: 'Legislative drafting, consultation, and enactment.',
                    status: 'red',
                  },
                  {
                    id: 6,
                    title: 'Implementation',
                    timeframe: '12mo+',
                    description: 'Service delivery, monitoring, and evaluation.',
                    status: 'red',
                  },
                ]}
                delayMetrics={[
                  {
                    label: 'Average Delay',
                    value: '3.4 months',
                    range: 'Issue → Minister',
                    description: 'Average time from issue identification to ministerial awareness.',
                  },
                  {
                    label: 'Policy Phase',
                    value: '8.7 months',
                    range: 'Announcement → Bill',
                    description: 'Time from policy announcement to bill introduction in parliament.',
                  },
                  {
                    label: 'Implementation',
                    value: '2.9 years',
                    range: 'Law → Delivery',
                    description: 'Average time from legislation passing to full service delivery.',
                  },
                ]}
                insights={[
                  {
                    text: 'Early stages (Frontline → Agency) typically move quickly with minimal delays.',
                  },
                  {
                    text: 'Ministerial review stage shows moderate delays, often due to competing priorities.',
                  },
                  {
                    text: 'Cabinet and legislative processes account for the longest delays in the chain.',
                  },
                  {
                    text: 'Implementation phase shows significant variability, with some projects taking 3+ years.',
                  },
                ]}
              />
            </div>

            {/* Component Structure */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Component Structure</div>
              <div className="space-y-3 text-[13px] text-cmi-text-secondary">
                <div>
                  <div className="font-semibold text-white/90 mb-1">Required Props:</div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><code className="text-cmi-accent">stages</code> - Array of chain stages with id, title, timeframe, description, status</li>
                    <li><code className="text-cmi-accent">delayMetrics</code> - Array of delay metric objects</li>
                    <li><code className="text-cmi-accent">insights</code> - Array of insight text objects</li>
                    <li><code className="text-cmi-accent">title</code> - Optional card title (string, default: "Chain of Responsibility")</li>
                    <li><code className="text-cmi-accent">subtitle</code> - Optional subtitle (string)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Usage Example */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Usage Example</div>
              <pre className="text-[11px] text-cmi-text-secondary overflow-x-auto">
{`import { ChainOfResponsibilityCard } from '@/components/templates/ChainOfResponsibilityCard';

<ChainOfResponsibilityCard
  stages={[
    {
      id: 1,
      title: 'Frontline data',
      timeframe: '0-1mo',
      description: 'Data collection from service delivery points...',
      status: 'green',
    },
    // ... more stages
  ]}
  delayMetrics={[
    {
      label: 'Average Delay',
      value: '3.4 months',
      range: 'Issue → Minister',
      description: 'Average time from issue identification...',
    },
    // ... more metrics
  ]}
  insights={[
    { text: 'Early stages typically move quickly...' },
    // ... more insights
  ]}
/>`}
              </pre>
            </div>

            {/* Design Specifications */}
            <div className="p-4 bg-cmi-card-bright rounded-lg border border-cmi-border">
              <div className="text-[11px] text-cmi-text-muted uppercase tracking-wide mb-3">Design Specifications</div>
              <div className="space-y-2 text-[13px] text-cmi-text-secondary">
                <div>• Card background: <code className="text-cmi-accent">bg-cmi-card</code> (#111A2E)</div>
                <div>• Process flow: Horizontal layout with colored stage indicators</div>
                <div>• Stage colors: green (on track), yellow (moderate), orange (delayed), red (critical)</div>
                <div>• Delay metrics: Bright card variant (#152038) with border</div>
                <div>• Connecting lines: Colored based on next stage status</div>
                <div>• Typography: text-2xl for title, text-sm for stage titles, text-[13px] for body</div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Spacing & Layout */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Spacing & Layout</h2>
        <Card>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-semibold text-white/90 mb-3">Standard Spacing</div>
              <div className="space-y-2 text-[13px] text-cmi-text-secondary">
                <div>• Card padding: p-5 or p-6</div>
                <div>• Gap between cards: gap-6</div>
                <div>• Internal spacing: space-y-2 to space-y-4</div>
                <div>• Sidebar width: w-[250px]</div>
                <div>• Left content: ~60% width</div>
                <div>• Right rail: ~40% width</div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

