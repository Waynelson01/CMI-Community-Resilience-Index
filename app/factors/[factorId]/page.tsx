'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { TrendArrow } from '@/components/ui/TrendArrow';
import { Tag } from '@/components/ui/Tag';
import { ChartWidget } from '@/components/ChartWidget';
import { InfoPopup } from '@/components/ui/InfoPopup';
import { mockFactors, mockChartData } from '@/lib/mockData';
import { X, ChevronRight } from 'lucide-react';

export default function FactorDetailPage() {
  const params = useParams();
  const factorId = params.factorId as string;
  const factor = mockFactors.find((f) => f.id === factorId);
  const [selectedSubFactor, setSelectedSubFactor] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  if (!factor) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">Factor not found</p>
      </div>
    );
  }

  const selectedSubFactorData = factor.subFactors.find((sf) => sf.id === selectedSubFactor);

  return (
    <div className="space-y-6">
      <PageHeader title={factor.name} subtitle={factor.description} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Left 2/3 */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero Card */}
          <Card
            title={factor.name}
            className="bg-gradient-to-br from-cmi-blue-50 to-cmi-blue-100 dark:from-cmi-blue-900/20 dark:to-cmi-blue-800/20"
          >
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-bold text-cmi-blue">{factor.score.toFixed(1)}</span>
              <span className="text-gray-500 dark:text-gray-400 text-xl">/ 10</span>
            </div>
            <div className="flex items-center gap-4">
              <TrendArrow direction={factor.trend} percent={factor.trendPercent} />
              {factor.trend === 'up' && <Tag variant="danger">Rising Pressure</Tag>}
              {factor.trend === 'down' && <Tag variant="success">Improving</Tag>}
              {factor.trend === 'flat' && <Tag variant="neutral">Stable</Tag>}
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300">{factor.description}</p>
          </Card>

          {/* Sub-Factor Grid */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sub-Factors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {factor.subFactors.map((subFactor) => (
                <Card
                  key={subFactor.id}
                  title={subFactor.name}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => {
                    setSelectedSubFactor(subFactor.id);
                    setPanelOpen(true);
                  }}
                >
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">{subFactor.score.toFixed(1)}</span>
                      <span className="text-gray-500 dark:text-gray-400">/ 10</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <TrendArrow direction={subFactor.trend} />
                      <Tag
                        variant={
                          subFactor.status === 'High Risk'
                            ? 'danger'
                            : subFactor.status === 'Rising'
                            ? 'warning'
                            : subFactor.status === 'Improving'
                            ? 'success'
                            : 'neutral'
                        }
                      >
                        {subFactor.status}
                      </Tag>
                    </div>
                    {subFactor.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{subFactor.description}</p>
                    )}
                    <button className="text-sm text-cmi-blue hover:text-cmi-blue-700 font-medium mt-2">
                      Open Details →
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Chart Widget */}
          <ChartWidget
            id={`factor-${factor.id}`}
            title={`${factor.name} Trend`}
            type="line"
            data={mockChartData}
            colorPalette="cmi-blue"
            size="md"
          />
        </div>

        {/* Right Panel Trigger */}
        <div className="lg:col-span-1">
          <button
            onClick={() => setPanelOpen(true)}
            className="w-full p-4 bg-cmi-blue text-white rounded-lg hover:bg-cmi-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            View Sub-Factor Details <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slide-Out Panel */}
      {panelOpen && selectedSubFactorData && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50" onClick={() => setPanelOpen(false)}>
          <div
            className="w-full max-w-2xl h-full bg-white dark:bg-gray-800 shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedSubFactorData.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{factor.name}</p>
                </div>
                <button
                  onClick={() => setPanelOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <Card title="Overview">
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedSubFactorData.description || `Detailed information about ${selectedSubFactorData.name}.`}
                  </p>
                </Card>

                <Card title="Score & Status">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold">{selectedSubFactorData.score.toFixed(1)}</span>
                    <span className="text-gray-500 dark:text-gray-400">/ 10</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <TrendArrow direction={selectedSubFactorData.trend} />
                    <Tag
                      variant={
                        selectedSubFactorData.status === 'High Risk'
                          ? 'danger'
                          : selectedSubFactorData.status === 'Rising'
                          ? 'warning'
                          : selectedSubFactorData.status === 'Improving'
                          ? 'success'
                          : 'neutral'
                      }
                    >
                      {selectedSubFactorData.status}
                    </Tag>
                  </div>
                </Card>

                <ChartWidget
                  id={`subfactor-${selectedSubFactorData.id}`}
                  title={`${selectedSubFactorData.name} Trend`}
                  type="bar"
                  data={mockChartData}
                  colorPalette="cmi-teal"
                  size="md"
                  isEditable
                />

                <Card title="Key Notes & Assumptions">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cmi-blue mt-1">•</span>
                      <span>Data sourced from official government statistics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cmi-blue mt-1">•</span>
                      <span>Updated quarterly with latest available data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cmi-blue mt-1">•</span>
                      <span>Normalized to 1-10 scale based on NSW-wide distribution</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

