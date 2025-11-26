'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { PillLegend } from '@/components/ui/PillLegend';
import { InfoPopup } from '@/components/ui/InfoPopup';
import { mockDataMappings } from '@/lib/mockData';
import { ArrowRight, Plus, Save } from 'lucide-react';

export default function DataMappingPage() {
  const [mappings] = useState(mockDataMappings);
  const [selectedMapping, setSelectedMapping] = useState<string | null>(null);

  const sourceColumns = [
    { id: '1', name: 'ABS_CENSUS_2021_HOUSEHOLD_INCOME', dataset: 'ABS 2021 Census' },
    { id: '2', name: 'NSW_GOV_CRIME_STATS_2024', dataset: 'NSW Gov Crime Statistics' },
    { id: '3', name: 'TRANSPORT_NSW_COMMUTE_TIMES', dataset: 'Transport for NSW' },
    { id: '4', name: 'HOUSING_AFFORDABILITY_INDEX', dataset: 'NSW Planning' },
  ];

  const targetFields = [
    { id: '1', name: 'Employment & Income > Income Levels', category: 'Economic', color: 'cmi-blue' },
    { id: '2', name: 'Crime & Safety > Crime Rates', category: 'Social', color: 'cmi-red' },
    { id: '3', name: 'Transport & Accessibility > Commute Times', category: 'Infrastructure', color: 'cmi-teal' },
    { id: '4', name: 'Housing > Affordability', category: 'Economic', color: 'cmi-blue' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'mapped':
        return 'success';
      case 'missing':
        return 'danger';
      case 'deprecated':
        return 'neutral';
      case 'warning':
        return 'warning';
      default:
        return 'neutral';
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Data Mapping & Legends"
        subtitle="Map source data columns to CMI factors and sub-factors"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Panel - Source Columns */}
        <div className="lg:col-span-1">
          <Card title="Source Columns">
            <div className="space-y-2">
              {sourceColumns.map((column) => {
                const mapping = mappings.find((m) => m.sourceColumn === column.name);
                return (
                  <div
                    key={column.id}
                    className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 ${
                      selectedMapping === column.id ? 'border-cmi-blue bg-cmi-blue-50 dark:bg-cmi-blue-900/20' : ''
                    }`}
                    onClick={() => setSelectedMapping(column.id)}
                  >
                    <div className="text-sm font-medium">{column.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{column.dataset}</div>
                    {mapping && (
                      <Tag variant={getStatusColor(mapping.status) as any} className="mt-2">
                        {mapping.status}
                      </Tag>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Center Panel - Mapping Visualization */}
        <div className="lg:col-span-2">
          <Card title="Mapping Visualization">
            <div className="relative min-h-[500px]">
              {/* Source Columns (Left) */}
              <div className="absolute left-0 top-0 w-48 space-y-4">
                {sourceColumns.map((column, index) => (
                  <div
                    key={column.id}
                    className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
                    style={{ marginTop: `${index * 120}px` }}
                  >
                    <div className="text-sm font-medium">{column.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{column.dataset}</div>
                  </div>
                ))}
              </div>

              {/* Target Fields (Right) */}
              <div className="absolute right-0 top-0 w-64 space-y-4">
                {targetFields.map((field, index) => {
                  const mapping = mappings.find((m) => m.targetField === field.name);
                  const sourceCol = sourceColumns.find((c) => {
                    const m = mappings.find((map) => map.targetField === field.name);
                    return m && m.sourceColumn === c.name;
                  });

                  return (
                    <div
                      key={field.id}
                      className="p-3 bg-white dark:bg-gray-800 border-2 rounded-lg shadow-sm"
                      style={{
                        marginTop: `${index * 120}px`,
                        borderColor: mapping ? `var(--${field.color})` : '#e5e7eb',
                      }}
                    >
                      <div className="text-sm font-medium">{field.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{field.category}</div>
                      {mapping && (
                        <Tag variant={getStatusColor(mapping.status) as any} className="mt-2">
                          {mapping.status}
                        </Tag>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Connection Lines (SVG overlay) */}
              <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, width: '100%', height: '100%' }}>
                {mappings.map((mapping) => {
                  const sourceIndex = sourceColumns.findIndex((c) => c.name === mapping.sourceColumn);
                  const targetIndex = targetFields.findIndex((f) => f.name === mapping.targetField);
                  if (sourceIndex === -1 || targetIndex === -1) return null;

                  const x1 = 192; // Left column right edge
                  const y1 = 60 + sourceIndex * 120; // Center of source item
                  const x2 = 400; // Right column left edge (approximate, will be adjusted by container width)
                  const y2 = 60 + targetIndex * 120; // Center of target item

                  return (
                    <path
                      key={mapping.id}
                      d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2} ${x2} ${y2}`}
                      stroke="#2563eb"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={mapping.status === 'warning' ? '5,5' : '0'}
                    />
                  );
                })}
              </svg>
            </div>
          </Card>
        </div>

        {/* Right Panel - Legends */}
        <div className="lg:col-span-1 space-y-4">
          <Card title="Interface Legend">
            <div className="space-y-3">
              <PillLegend
                items={[
                  { label: 'Mapped', variant: 'success' },
                  { label: 'Missing', variant: 'danger' },
                  { label: 'Deprecated', variant: 'neutral' },
                  { label: 'Warning', variant: 'warning' },
                ]}
              />
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <div className="flex items-center gap-2">
                    <span>ℹ️</span>
                    <span>Info available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✏️</span>
                    <span>Editable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⚠️</span>
                    <span>Warning</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Chart/Diagram Legend">
            <div className="space-y-2 text-sm">
              <div>
                <div className="font-medium mb-1">Colors:</div>
                <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                  <div>Blue = Economic factors</div>
                  <div>Red = Social factors</div>
                  <div>Teal = Infrastructure</div>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="font-medium mb-1">Lines:</div>
                <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                  <div>Solid = Active mapping</div>
                  <div>Dashed = Warning</div>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Trending Arrow Legend">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-cmi-red">↑</span>
                <span>Worsening / Rising stress</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cmi-green">↓</span>
                <span>Improving / Decreasing stress</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">→</span>
                <span>Flat / Stable</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-cmi-blue text-white rounded-lg hover:bg-cmi-blue-700 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add New Derived Factor
        </button>
        <button className="px-4 py-2 bg-cmi-green text-white rounded-lg hover:bg-cmi-green-700 flex items-center gap-2">
          <Save className="w-4 h-4" /> Save Mapping
        </button>
      </div>
    </div>
  );
}

