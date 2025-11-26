'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { ToggleSwitch } from '@/components/ui/ToggleSwitch';
import { GripVertical, Save, Eye, RotateCcw, Monitor, Tablet, Smartphone } from 'lucide-react';

type CanvasSize = 'web' | 'tablet' | 'mobile';
type CanvasMode = 'edit' | 'live';

interface CanvasElement {
  id: string;
  type: 'card' | 'chart' | 'table' | 'text' | 'info-popup' | 'legend';
  x: number;
  y: number;
  w: number;
  h: number;
}

export default function CanvasBuilderPage() {
  const [mode, setMode] = useState<CanvasMode>('edit');
  const [canvasSize, setCanvasSize] = useState<CanvasSize>('web');
  const [showGrid, setShowGrid] = useState(true);
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const paletteItems = [
    { type: 'card', label: 'Card', icon: '📄' },
    { type: 'chart', label: 'Chart Widget', icon: '📊' },
    { type: 'table', label: 'Table', icon: '📋' },
    { type: 'text', label: 'Text Block', icon: '📝' },
    { type: 'info-popup', label: 'Info Popup', icon: 'ℹ️' },
    { type: 'legend', label: 'Status/Legend Bar', icon: '🏷️' },
  ];

  const sizeConfig = {
    web: { width: '100%', label: 'Web' },
    tablet: { width: '768px', label: 'Tablet' },
    mobile: { width: '375px', label: 'Mobile' },
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Canvas Builder"
        subtitle="Design and customize page layouts with drag-and-drop widgets"
      />

      {/* Toolbar */}
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Mode:</span>
              <ToggleSwitch
                checked={mode === 'live'}
                onChange={(checked) => setMode(checked ? 'live' : 'edit')}
                label={mode === 'live' ? 'Live' : 'Edit'}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Canvas Size:</span>
              <select
                value={canvasSize}
                onChange={(e) => setCanvasSize(e.target.value as CanvasSize)}
                className="px-3 py-2 border rounded-lg"
              >
                <option value="web">Web</option>
                <option value="tablet">Tablet</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>
            <ToggleSwitch checked={showGrid} onChange={setShowGrid} label="Show Grid" />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center gap-2">
              <Save className="w-4 h-4" /> Save Draft
            </button>
            <button className="px-4 py-2 bg-cmi-blue text-white rounded-lg hover:bg-cmi-blue-700 flex items-center gap-2">
              <Eye className="w-4 h-4" /> Go Live
            </button>
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> Reset Layout
            </button>
          </div>
        </div>
      </Card>

      <div className="flex gap-6">
        {/* Left Sidebar - Palette */}
        <div className="w-64 flex-shrink-0">
          <Card title="Elements Palette">
            <div className="space-y-2">
              {paletteItems.map((item) => (
                <button
                  key={item.type}
                  className="w-full p-3 text-left border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-3"
                  onClick={() => {
                    // TODO: Add drag-and-drop logic
                    console.log('Add element:', item.type);
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Canvas Area */}
        <div className="flex-1">
          <Card>
            <div
              className="relative bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"
              style={{
                width: sizeConfig[canvasSize].width,
                minHeight: '600px',
                margin: '0 auto',
              }}
            >
              {showGrid && (
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
              )}

              {/* Measurement markers */}
              <div className="absolute top-0 left-0 right-0 h-6 border-b border-gray-300 dark:border-gray-600 flex items-center justify-between px-2 text-xs text-gray-500">
                <span>0px</span>
                <span>{sizeConfig[canvasSize].label}</span>
                <span>{canvasSize === 'web' ? '100%' : sizeConfig[canvasSize].width}</span>
              </div>

              {elements.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <p className="text-lg mb-2">Empty Canvas</p>
                    <p className="text-sm">Drag elements from the palette to get started</p>
                  </div>
                </div>
              )}

              {/* Canvas elements would be rendered here */}
            </div>
          </Card>
        </div>

        {/* Right Sidebar - Inspector */}
        {selectedElement && (
          <div className="w-64 flex-shrink-0">
            <Card title="Properties">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea className="w-full px-3 py-2 border rounded-lg" rows={3} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Background Color</label>
                  <input type="color" className="w-full h-10 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Data Binding</label>
                  <select className="w-full px-3 py-2 border rounded-lg">
                    <option>Select data source...</option>
                    <option>Factor Scores</option>
                    <option>Region Data</option>
                    <option>Trend Data</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

