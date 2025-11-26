'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { mockDepartments, mockChainOfResponsibility } from '@/lib/mockData';
import { TrendingUp, AlertTriangle, Clock } from 'lucide-react';

export default function GovPerformancePage() {
  const overallScore = 6.6;
  const departmentsMonitored = mockDepartments.length;
  const openBottlenecks = mockDepartments.reduce((sum, d) => sum + d.unresolvedIssues, 0);
  const avgTimeToAddress = Math.round(
    mockDepartments.reduce((sum, d) => sum + d.avgResponseTime, 0) / mockDepartments.length
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Responsive':
        return 'success';
      case 'Delayed':
        return 'danger';
      case 'Under Review':
        return 'warning';
      default:
        return 'neutral';
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Government Performance & Department Review"
        subtitle="Monitor public service department performance and response times"
      />

      {/* High-level Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card
          title="Overall Government Performance Score"
          className="bg-gradient-to-br from-cmi-blue-50 to-cmi-blue-100 dark:from-cmi-blue-900/20 dark:to-cmi-blue-800/20"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-cmi-blue">{overallScore.toFixed(1)}</span>
            <span className="text-gray-500 dark:text-gray-400">/ 10</span>
          </div>
        </Card>
        <Card title="Departments Monitored">
          <div className="text-3xl font-bold">{departmentsMonitored}</div>
        </Card>
        <Card title="Open Bottlenecks / Delays">
          <div className="text-3xl font-bold text-cmi-red">{openBottlenecks}</div>
        </Card>
        <Card title="Average Time to Address Issues">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-cmi-amber" />
            <span className="text-3xl font-bold">{avgTimeToAddress}</span>
            <span className="text-gray-500 dark:text-gray-400">days</span>
          </div>
        </Card>
      </div>

      {/* Government Performance Overview */}
      <Card title="Government Performance Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Major Strengths</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cmi-green mt-1">✓</span>
                <span>NSW Police maintains responsive service delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cmi-green mt-1">✓</span>
                <span>NSW Health shows consistent performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cmi-green mt-1">✓</span>
                <span>Emergency services response times within targets</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Major Weaknesses</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cmi-red mt-1">✗</span>
                <span>NSW Education has high unresolved issue count</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cmi-red mt-1">✗</span>
                <span>Transport for NSW under review for delays</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cmi-red mt-1">✗</span>
                <span>Average response times above target thresholds</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Key Risk Highlights */}
      <Card
        title="Key Risk Highlights"
        className="border-2 border-cmi-red-200 dark:border-cmi-red-800"
      >
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-cmi-red-50 dark:bg-cmi-red-900/20 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-cmi-red flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-cmi-red">NSW Education - High Unresolved Issues</div>
              <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                67 unresolved issues with average response time of 18 days
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-cmi-amber-50 dark:bg-cmi-amber-900/20 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-cmi-amber flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-cmi-amber">Transport for NSW - Under Review</div>
              <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                89 unresolved issues requiring immediate attention
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Chain of Responsibility Timeline */}
      <Card title="Chain of Responsibility Timeline">
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {mockChainOfResponsibility.map((node, index) => (
              <div key={node.id} className="flex items-center">
                <div className="flex flex-col items-center min-w-[150px]">
                  <div
                    className={`w-full p-4 rounded-lg border-2 ${
                      node.status === 'Responsive'
                        ? 'border-cmi-green bg-cmi-green-50 dark:bg-cmi-green-900/20'
                        : node.status === 'Delayed'
                        ? 'border-cmi-red bg-cmi-red-50 dark:bg-cmi-red-900/20'
                        : 'border-cmi-amber bg-cmi-amber-50 dark:bg-cmi-amber-900/20'
                    }`}
                  >
                    <div className="font-semibold text-center">{node.label}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">{node.role}</div>
                    {node.status && (
                      <div className="mt-2 flex justify-center">
                        <Tag variant={getStatusColor(node.status) as any}>{node.status}</Tag>
                      </div>
                    )}
                    {node.timeTaken !== undefined && (
                      <div className="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">
                        {node.timeTaken} days
                      </div>
                    )}
                  </div>
                </div>
                {index < mockChainOfResponsibility.length - 1 && (
                  <div className="flex-shrink-0 w-8 h-0.5 bg-gray-300 dark:bg-gray-600 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Department-Level Scores */}
      <Card title="Department-Level Performance">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Department</th>
                <th className="px-4 py-3 text-left font-semibold">Service Type</th>
                <th className="px-4 py-3 text-left font-semibold">Score</th>
                <th className="px-4 py-3 text-left font-semibold">Complaints</th>
                <th className="px-4 py-3 text-left font-semibold">Avg Response Time</th>
                <th className="px-4 py-3 text-left font-semibold">Unresolved Issues</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockDepartments.map((dept) => (
                <tr key={dept.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-3 font-medium">{dept.name}</td>
                  <td className="px-4 py-3">{dept.serviceType}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{dept.score.toFixed(1)}</span>
                      <TrendingUp className="w-4 h-4 text-cmi-green" />
                    </div>
                  </td>
                  <td className="px-4 py-3">{dept.complaints}</td>
                  <td className="px-4 py-3">{dept.avgResponseTime} days</td>
                  <td className="px-4 py-3">
                    <span className={dept.unresolvedIssues > 50 ? 'text-cmi-red font-semibold' : ''}>
                      {dept.unresolvedIssues}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Tag variant={getStatusColor(dept.status) as any}>{dept.status}</Tag>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

