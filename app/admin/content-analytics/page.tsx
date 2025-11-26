'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { mockContentSections } from '@/lib/mockData';
import { Download, Filter } from 'lucide-react';

export default function ContentAnalyticsPage() {
  const [selectedPage, setSelectedPage] = useState('all');
  const [sections] = useState(mockContentSections);

  const pages = ['all', 'Overview', 'About', 'Factors', 'Command Centre'];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Content Analytics"
        subtitle="Track section read counts, polls, and data file usage"
      />

      {/* Filter Bar */}
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                {pages.map((page) => (
                  <option key={page} value={page}>
                    {page === 'all' ? 'All Pages' : page}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="date"
              className="px-3 py-2 border rounded-lg"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
            <span className="text-gray-500">to</span>
            <input
              type="date"
              className="px-3 py-2 border rounded-lg"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
          </div>
          <button className="px-4 py-2 bg-cmi-blue text-white rounded-lg hover:bg-cmi-blue-700 flex items-center gap-2">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Table */}
        <div className="lg:col-span-2">
          <Card title="Section Analytics">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Section Name</th>
                    <th className="px-4 py-3 text-left font-semibold">Views</th>
                    <th className="px-4 py-3 text-left font-semibold">Unique</th>
                    <th className="px-4 py-3 text-left font-semibold">Avg Time</th>
                    <th className="px-4 py-3 text-left font-semibold">Polls</th>
                    <th className="px-4 py-3 text-left font-semibold">Files</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {sections.map((section) => (
                    <tr key={section.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-4 py-3 font-medium">{section.name}</td>
                      <td className="px-4 py-3">{section.views.toLocaleString()}</td>
                      <td className="px-4 py-3">{section.uniqueVisitors.toLocaleString()}</td>
                      <td className="px-4 py-3">{section.avgTimeOnSection}s</td>
                      <td className="px-4 py-3">{section.polls?.length || 0}</td>
                      <td className="px-4 py-3">{section.dataFiles?.length || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Right Side Panel */}
        <div className="space-y-4">
          {/* Polls Tab */}
          <Card title="Polls">
            <div className="space-y-4">
              <button className="w-full px-4 py-2 bg-cmi-blue text-white rounded-lg hover:bg-cmi-blue-700">
                Create New Poll
              </button>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="font-medium text-sm">Sample Poll</div>
                  <div className="text-xs text-gray-500 mt-1">Question: How useful is this section?</div>
                  <div className="mt-2">
                    <span className="text-xs text-gray-600">Status: Active</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Files Tab */}
          <Card title="Files & Data Sources">
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <div className="font-medium text-sm">ABS 2021 Census.xlsx</div>
                <div className="text-xs text-gray-500 mt-1">Type: Excel</div>
                <div className="text-xs text-gray-500">Source: ABS 2021 Census</div>
                <div className="text-xs text-gray-500">Added: 2025-01-10</div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="font-medium text-sm">NSW Crime Stats.csv</div>
                <div className="text-xs text-gray-500 mt-1">Type: CSV</div>
                <div className="text-xs text-gray-500">Source: NSW Gov Crime Statistics</div>
                <div className="text-xs text-gray-500">Added: 2025-01-08</div>
              </div>
            </div>
          </Card>

          {/* Totals Summary */}
          <Card title="Totals Summary">
            <div className="space-y-3">
              <div>
                <div className="text-2xl font-bold">{sections.reduce((sum, s) => sum + s.views, 0).toLocaleString()}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Views</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {sections.reduce((sum, s) => sum + s.uniqueVisitors, 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Unique Visitors</div>
              </div>
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm font-medium mb-2">Top 5 Sections:</div>
                <div className="space-y-1 text-xs">
                  {sections
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 5)
                    .map((section) => (
                      <div key={section.id} className="flex justify-between">
                        <span className="truncate">{section.name}</span>
                        <span className="font-medium">{section.views}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

