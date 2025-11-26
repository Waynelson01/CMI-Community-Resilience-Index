'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { mockEnquiries } from '@/lib/mockData';
import { Bot, Mail } from 'lucide-react';

export default function CustomersPage() {
  const [enquiries] = useState(mockEnquiries);
  const [selectedEnquiry, setSelectedEnquiry] = useState(mockEnquiries[0]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'warning';
      case 'In Progress':
        return 'neutral';
      case 'Resolved':
        return 'success';
      default:
        return 'neutral';
    }
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'High':
        return 'danger';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'neutral';
      default:
        return 'neutral';
    }
  };

  const totalEnquiries = enquiries.length;
  const newLast7Days = enquiries.filter((e) => {
    const date = new Date(e.date);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return date >= weekAgo;
  }).length;
  const openCount = enquiries.filter((e) => e.status !== 'Resolved').length;
  const resolvedCount = enquiries.filter((e) => e.status === 'Resolved').length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Customer Management"
        subtitle="Manage website feedback, requests, and enquiries"
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Total Enquiries">
          <div className="text-3xl font-bold">{totalEnquiries}</div>
        </Card>
        <Card title="New (Last 7 Days)">
          <div className="text-3xl font-bold text-cmi-amber">{newLast7Days}</div>
        </Card>
        <Card title="Open">
          <div className="text-3xl font-bold text-cmi-blue">{openCount}</div>
        </Card>
        <Card title="Resolved">
          <div className="text-3xl font-bold text-cmi-green">{resolvedCount}</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Table */}
        <div className="lg:col-span-2">
          <Card title="Enquiries">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Date</th>
                    <th className="px-4 py-3 text-left font-semibold">Name / Organisation</th>
                    <th className="px-4 py-3 text-left font-semibold">Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Linked Page</th>
                    <th className="px-4 py-3 text-left font-semibold">Status</th>
                    <th className="px-4 py-3 text-left font-semibold">AI Agent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {enquiries.map((enquiry) => (
                    <tr
                      key={enquiry.id}
                      className={`hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer ${
                        selectedEnquiry?.id === enquiry.id ? 'bg-cmi-blue-50 dark:bg-cmi-blue-900/20' : ''
                      }`}
                      onClick={() => setSelectedEnquiry(enquiry)}
                    >
                      <td className="px-4 py-3">{new Date(enquiry.date).toLocaleDateString()}</td>
                      <td className="px-4 py-3">
                        <div className="font-medium">{enquiry.name}</div>
                        {enquiry.organisation && (
                          <div className="text-xs text-gray-500">{enquiry.organisation}</div>
                        )}
                      </td>
                      <td className="px-4 py-3">{enquiry.type}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{enquiry.linkedPage || '-'}</td>
                      <td className="px-4 py-3">
                        <Tag variant={getStatusColor(enquiry.status) as any}>{enquiry.status}</Tag>
                      </td>
                      <td className="px-4 py-3">
                        {enquiry.aiAgentInvolved ? (
                          <Bot className="w-4 h-4 text-cmi-teal" />
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Detail Panel */}
        {selectedEnquiry && (
          <div className="space-y-4">
            <Card title="Enquiry Details">
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Name</div>
                  <div className="text-lg font-semibold">{selectedEnquiry.name}</div>
                  {selectedEnquiry.organisation && (
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedEnquiry.organisation}</div>
                  )}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</div>
                  <div className="text-sm">{selectedEnquiry.email}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Type</div>
                  <div className="text-sm">{selectedEnquiry.type}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</div>
                  <div className="mt-1">
                    <Tag variant={getStatusColor(selectedEnquiry.status) as any}>{selectedEnquiry.status}</Tag>
                  </div>
                  <select className="mt-2 w-full px-3 py-2 border rounded-lg text-sm">
                    <option>New</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                  </select>
                </div>
                {selectedEnquiry.priority && (
                  <div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Priority</div>
                    <div className="mt-1">
                      <Tag variant={getPriorityColor(selectedEnquiry.priority) as any}>{selectedEnquiry.priority}</Tag>
                    </div>
                  </div>
                )}
                {selectedEnquiry.tags && selectedEnquiry.tags.length > 0 && (
                  <div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Tags</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedEnquiry.tags.map((tag, index) => (
                        <Tag key={index} variant="neutral">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Message</div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">{selectedEnquiry.message}</div>
                </div>
                {selectedEnquiry.notes && (
                  <div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Notes</div>
                    <textarea
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                      rows={3}
                      defaultValue={selectedEnquiry.notes}
                    />
                  </div>
                )}
              </div>
            </Card>

            {/* Email Template & AI Agent */}
            <Card title="Reply">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Template</label>
                  <select className="w-full px-3 py-2 border rounded-lg text-sm">
                    <option>Select template...</option>
                    <option>Data Request Received</option>
                    <option>Media Enquiry</option>
                    <option>Feedback Thank You</option>
                    <option>General Response</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <label className="text-sm flex items-center gap-2">
                    <Bot className="w-4 h-4 text-cmi-teal" />
                    Draft reply using AI Agent
                  </label>
                </div>
                {selectedEnquiry.aiAgentInvolved && (
                  <div>
                    <label className="block text-sm font-medium mb-2">AI Suggested Reply</label>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
                      <p>Thank you for your enquiry regarding {selectedEnquiry.type.toLowerCase()}...</p>
                      <p className="mt-2">[AI-generated response preview]</p>
                    </div>
                  </div>
                )}
                <button className="w-full px-4 py-2 bg-cmi-blue text-white rounded-lg hover:bg-cmi-blue-700 flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" /> Send Reply
                </button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

