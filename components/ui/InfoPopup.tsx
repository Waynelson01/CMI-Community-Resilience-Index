'use client';

import React, { useState } from 'react';
import { Info, X } from 'lucide-react';
import { InfoPopupData } from '@/types';
import { Card } from './Card';

interface InfoPopupProps {
  data: InfoPopupData;
  isAdmin?: boolean;
  onEdit?: (data: InfoPopupData) => void;
}

export const InfoPopup: React.FC<InfoPopupProps> = ({ data, isAdmin = false, onEdit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(data);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        aria-label="Show information"
      >
        <Info className="w-3 h-3" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {isAdmin ? 'Edit Information' : 'Information'}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {isAdmin ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                    <input
                      type="text"
                      value={editData.title}
                      onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                    <textarea
                      value={editData.description}
                      onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  {editData.dataSources && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Data Sources</label>
                      <input
                        type="text"
                        value={editData.dataSources.join(', ')}
                        onChange={(e) => setEditData({ ...editData, dataSources: e.target.value.split(', ') })}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  )}
                  <div className="flex gap-2 pt-4">
                    <button
                      onClick={() => {
                        if (onEdit) onEdit(editData);
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 bg-cmi-blue text-white rounded-lg hover:bg-cmi-blue-700 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{editData.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{editData.description}</p>
                  </div>
                  {editData.dataSources && editData.dataSources.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Data Sources:</h5>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                        {editData.dataSources.map((source, index) => (
                          <li key={index}>{source}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {editData.lastUpdated && (
                    <p className="text-xs text-gray-500 dark:text-gray-500">Last updated: {editData.lastUpdated}</p>
                  )}
                  {editData.version && (
                    <p className="text-xs text-gray-500 dark:text-gray-500">Version: {editData.version}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

