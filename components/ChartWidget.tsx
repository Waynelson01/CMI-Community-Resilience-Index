'use client';

import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GripVertical, Edit2, Trash2 } from 'lucide-react';
import { ChartDataPoint } from '@/types';
import { Card } from './ui/Card';
import { ToggleSwitch } from './ui/ToggleSwitch';

interface ChartWidgetProps {
  id: string;
  title: string;
  type: 'bar' | 'line' | 'area';
  data: ChartDataPoint[];
  colorPalette?: string;
  showGrid?: boolean;
  showLabels?: boolean;
  isEditable?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onResize?: (size: 'sm' | 'md' | 'lg') => void;
  size?: 'sm' | 'md' | 'lg';
  isDraggable?: boolean;
}

const sizeClasses = {
  sm: 'h-48',
  md: 'h-64',
  lg: 'h-96',
};

export const ChartWidget: React.FC<ChartWidgetProps> = ({
  title,
  type,
  data,
  colorPalette = 'cmi-blue',
  showGrid = true,
  showLabels = true,
  isEditable = false,
  onEdit,
  onDelete,
  onResize,
  size = 'md',
  isDraggable = false,
}) => {
  const [localData, setLocalData] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  const [chartType, setChartType] = useState(type);
  const [showGridLines, setShowGridLines] = useState(showGrid);
  const [showChartLabels, setShowChartLabels] = useState(showLabels);
  const [localColorPalette, setLocalColorPalette] = useState(colorPalette);

  const colorMap: Record<string, string> = {
    'cmi-blue': '#2563eb',
    'cmi-teal': '#14b8a6',
    'cmi-amber': '#f59e0b',
    'cmi-green': '#10b981',
    'cmi-red': '#ef4444',
  };

  const chartColor = colorMap[localColorPalette] || colorMap['cmi-blue'];

  const renderChart = () => {
    const commonProps = {
      data: localData,
      margin: { top: 5, right: 30, left: 20, bottom: 5 },
    };

    switch (chartType) {
      case 'bar':
        return (
          <BarChart {...commonProps}>
            {showGridLines && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill={chartColor} />
          </BarChart>
        );
      case 'line':
        return (
          <LineChart {...commonProps}>
            {showGridLines && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke={chartColor} strokeWidth={2} />
          </LineChart>
        );
      case 'area':
        return (
          <AreaChart {...commonProps}>
            {showGridLines && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke={chartColor} fill={chartColor} fillOpacity={0.6} />
          </AreaChart>
        );
      default:
        return null;
    }
  };

  return (
    <Card
      title={title}
      className="relative"
    >
      {isDraggable && (
        <div className="absolute top-2 right-2 cursor-move text-gray-400 hover:text-gray-600">
          <GripVertical className="w-5 h-5" />
        </div>
      )}

      {isEditable && (
        <div className="absolute top-2 right-12 flex gap-2">
          {onEdit && (
            <button
              onClick={onEdit}
              className="p-1 text-gray-400 hover:text-gray-600 rounded"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          )}
          {onDelete && (
            <button
              onClick={onDelete}
              className="p-1 text-gray-400 hover:text-red-600 rounded"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {isEditing ? (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Chart Type</label>
              <select
                value={chartType}
                onChange={(e) => setChartType(e.target.value as 'bar' | 'line' | 'area')}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="bar">Bar</option>
                <option value="line">Line</option>
                <option value="area">Area</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Color</label>
              <select
                value={localColorPalette}
                onChange={(e) => setLocalColorPalette(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="cmi-blue">Blue</option>
                <option value="cmi-teal">Teal</option>
                <option value="cmi-amber">Amber</option>
                <option value="cmi-green">Green</option>
                <option value="cmi-red">Red</option>
              </select>
            </div>
            {onResize && (
              <div>
                <label className="block text-sm font-medium mb-1">Size</label>
                <select
                  value={size}
                  onChange={(e) => onResize(e.target.value as 'sm' | 'md' | 'lg')}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                </select>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <ToggleSwitch
              checked={showGridLines}
              onChange={setShowGridLines}
              label="Show Grid Lines"
            />
            <ToggleSwitch
              checked={showChartLabels}
              onChange={setShowChartLabels}
              label="Show Labels"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Data Table</label>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left">Label</th>
                    <th className="px-3 py-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {localData.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-3 py-2">
                        <input
                          type="text"
                          value={item.label}
                          onChange={(e) => {
                            const newData = [...localData];
                            newData[index].label = e.target.value;
                            setLocalData(newData);
                          }}
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-3 py-2">
                        <input
                          type="number"
                          value={item.value}
                          onChange={(e) => {
                            const newData = [...localData];
                            newData[index].value = parseFloat(e.target.value) || 0;
                            setLocalData(newData);
                          }}
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-cmi-blue text-white rounded-lg hover:bg-cmi-blue-700"
            >
              Done
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          {isEditable && (
            <button
              onClick={() => setIsEditing(true)}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 rounded"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          )}
          <div className={sizeClasses[size]}>
            <ResponsiveContainer width="100%" height="100%">
              {renderChart()}
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </Card>
  );
};

