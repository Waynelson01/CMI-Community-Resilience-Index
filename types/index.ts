// Core Types
export type UserRole = 'Analyst' | 'Admin' | 'Public';
export type ViewMode = 'public' | 'admin';
export type TrendDirection = 'up' | 'down' | 'flat';
export type StatusVariant = 'success' | 'warning' | 'danger' | 'neutral';
export type BadgeVariant = 'new' | 'beta' | 'info';

// Factor Types
export interface Factor {
  id: string;
  name: string;
  score: number; // 1-10
  trend: TrendDirection;
  trendPercent?: number;
  description: string;
  subFactors: SubFactor[];
  category?: string;
}

export interface SubFactor {
  id: string;
  name: string;
  score: number;
  trend: TrendDirection;
  status: 'Stable' | 'Rising' | 'High Risk' | 'Improving';
  description?: string;
  data?: ChartDataPoint[];
}

// Chart Types
export interface ChartDataPoint {
  label: string;
  value: number;
  date?: string;
}

export interface ChartWidget {
  id: string;
  title: string;
  type: 'bar' | 'line' | 'area' | 'stat' | 'table' | 'text' | 'map';
  size: 'sm' | 'md' | 'lg' | 'xl';
  position: { x: number; y: number; w: number; h: number };
  dataSource?: string;
  data?: ChartDataPoint[];
  colorPalette?: string;
  showGrid?: boolean;
  showLabels?: boolean;
}

// Command Centre Types
export interface CommandWidget extends ChartWidget {
  title: string;
  type: 'stat' | 'chart' | 'table' | 'text' | 'map';
}

// Region Types
export interface Region {
  id: string;
  name: string;
  stressScore: number;
  isMostStressed?: boolean;
  isMostResilient?: boolean;
}

// Enquiry Types
export interface Enquiry {
  id: string;
  date: string;
  name: string;
  organisation?: string;
  email: string;
  type: 'Feedback' | 'Data Request' | 'Media' | 'Govt Dept' | 'Research' | 'Other';
  linkedPage?: string;
  status: 'New' | 'In Progress' | 'Resolved';
  assignedTo?: string;
  aiAgentInvolved: boolean;
  message: string;
  notes?: string;
  tags?: string[];
  priority?: 'Low' | 'Medium' | 'High';
}

// Content Analytics Types
export interface ContentSection {
  id: string;
  name: string;
  page: string;
  views: number;
  uniqueVisitors: number;
  avgTimeOnSection: number; // seconds
  polls?: Poll[];
  dataFiles?: DataFile[];
}

export interface Poll {
  id: string;
  question: string;
  options: string[];
  status: 'Active' | 'Closed';
  participationRate?: number;
  sectionId: string;
}

export interface DataFile {
  id: string;
  name: string;
  type: 'Excel' | 'CSV' | 'PDF' | 'JSON';
  source: string;
  addedBy: string;
  date: string;
  sectionId: string;
}

// Government Performance Types
export interface Department {
  id: string;
  name: string;
  score: number;
  serviceType: string;
  complaints: number;
  avgResponseTime: number; // days
  unresolvedIssues: number;
  status: 'Responsive' | 'Delayed' | 'Under Review';
}

export interface ChainOfResponsibilityNode {
  id: string;
  label: string;
  role: string;
  status?: 'Delayed' | 'Under Review' | 'Responsive';
  timeTaken?: number; // days
}

// Data Mapping Types
export interface DataMapping {
  id: string;
  sourceColumn: string;
  targetField: string;
  sourceDataset: string;
  dataType: string;
  updateFrequency: string;
  status: 'mapped' | 'missing' | 'deprecated' | 'warning';
}

// Canvas Types
export interface CanvasElement {
  id: string;
  type: 'card' | 'chart' | 'table' | 'text' | 'info-popup' | 'legend';
  position: { x: number; y: number; w: number; h: number };
  properties: Record<string, any>;
}

// Info Popup Types
export interface InfoPopupData {
  title: string;
  description: string;
  dataSources?: string[];
  lastUpdated?: string;
  version?: string;
}

