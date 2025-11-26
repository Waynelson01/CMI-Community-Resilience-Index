'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { ChartWidget } from '@/components/ChartWidget';
import { ToggleSwitch } from '@/components/ui/ToggleSwitch';
import { useAppShell } from '@/components/AppShell';
import { mockChartData, mockFactors, mockRegions } from '@/lib/mockData';
import { Plus, Trash2, Lock, Grid } from 'lucide-react';

export default function CommandCentrePage() {
  const { viewMode } = useAppShell();
  const [showGrid, setShowGrid] = useState(false);
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stat', title: 'Critical Regions', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'chart', title: 'Top 5 Stress Factors', x: 4, y: 0, w: 4, h: 2 },
    { id: '3', type: 'stat', title: 'Recent Trend Alerts', x: 8, y: 0, w: 4, h: 2 },
  ]);

  const isAdmin = viewMode === 'admin';

  return (
    <div className="space-y-6">
      <PageHeader
        title="CMI Command Centre"
        subtitle="Live monitoring and trending data dashboard"
        actions={
          isAdmin && (
            <div className="flex items-center gap-4">
              <ToggleSwitch checked={showGrid} onChange={setShowGrid} label="Show Grid" />
            </div>
          )
        }
      />

      {isAdmin && (
        <Card title="Command Layout Controls" className="mb-6">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-cmi-blue text-white rounded-lg hover:bg-cmi-blue-700 flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Widget
            </button>
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center gap-2">
              <Trash2 className="w-4 h-4" /> Remove Widget
            </button>
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center gap-2">
              <Grid className="w-4 h-4" /> Group Widgets
            </button>
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Lock Widget
            </button>
          </div>
        </Card>
      )}

      {/* Command Centre Canvas */}
      <div className={`relative min-h-[600px] bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 ${showGrid ? 'bg-grid-pattern' : ''}`}>
        {showGrid && (
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        )}

        <div className="grid grid-cols-12 gap-4 relative">
          {/* Top Row Widgets */}
          <div className="col-span-4">
            <Card title="Critical Regions">
              <div className="space-y-2">
                {mockRegions
                  .sort((a, b) => b.stressScore - a.stressScore)
                  .slice(0, 3)
                  .map((region) => (
                    <div key={region.id} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                      <span className="font-medium">{region.name}</span>
                      <span className="text-cmi-red font-semibold">{region.stressScore.toFixed(1)}</span>
                    </div>
                  ))}
              </div>
            </Card>
          </div>

          <div className="col-span-4">
            <ChartWidget
              id="top-factors"
              title="Top 5 Stress Factors"
              type="bar"
              data={mockFactors
                .sort((a, b) => b.score - a.score)
                .slice(0, 5)
                .map((f) => ({ label: f.name.substring(0, 15), value: f.score }))}
              colorPalette="cmi-red"
              size="sm"
              isDraggable={isAdmin}
            />
          </div>

          <div className="col-span-4">
            <Card title="Recent Trend Alerts">
              <div className="space-y-2">
                <div className="p-2 bg-cmi-red-50 dark:bg-cmi-red-900/20 rounded">
                  <div className="text-sm font-medium">Cost of Living</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Rising 3.5%</div>
                </div>
                <div className="p-2 bg-cmi-amber-50 dark:bg-cmi-amber-900/20 rounded">
                  <div className="text-sm font-medium">Housing</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Rising 2.1%</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Central Map Widget */}
          <div className="col-span-8 mt-4">
            <Card
              title="NSW Region Map"
              className="min-h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-800"
            >
              {isAdmin ? (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <p>Drop map or main widget here</p>
                  <p className="text-sm mt-2">In edit mode: drag widgets here</p>
                </div>
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <p>Interactive map visualization</p>
                  <p className="text-sm mt-2">Regional stress scores and trends</p>
                </div>
              )}
            </Card>
          </div>

          {/* Right Column */}
          <div className="col-span-4 mt-4 space-y-4">
            <Card title="Factor Summary">
              <div className="space-y-2">
                {mockFactors.slice(0, 5).map((factor) => (
                  <div key={factor.id} className="flex justify-between items-center text-sm">
                    <span>{factor.name}</span>
                    <span className="font-semibold">{factor.score.toFixed(1)}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Government Performance">
              <div className="space-y-2">
                <div className="p-2 bg-cmi-amber-50 dark:bg-cmi-amber-900/20 rounded">
                  <div className="text-sm font-medium">NSW Education</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">67 unresolved issues</div>
                </div>
                <div className="p-2 bg-cmi-green-50 dark:bg-cmi-green-900/20 rounded">
                  <div className="text-sm font-medium">NSW Police</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">23 unresolved issues</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom Timeline */}
          <div className="col-span-12 mt-4">
            <Card title="Timeline / Event Stream">
              <div className="flex gap-4 overflow-x-auto pb-2">
                {['2025-01-15', '2025-01-14', '2025-01-13', '2025-01-12'].map((date, index) => (
                  <div key={index} className="flex-shrink-0 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg min-w-[200px]">
                    <div className="text-sm font-medium">{new Date(date).toLocaleDateString()}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Data update published</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

