'use client';

import React, { useState, createContext, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Info,
  Activity,
  BarChart3,
  Settings,
  Map,
  FileText,
  Users,
  Building2,
  Palette,
  Database,
  TrendingUp,
  Menu,
  X,
  User,
  Home,
  Shield,
  Lock,
  Leaf,
  Briefcase,
  Scale,
  Zap,
  Wifi,
  Users as UsersIcon,
  CircleDollarSign,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import { ViewMode, UserRole } from '@/types';

interface AppShellContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  userRole: UserRole;
}

const AppShellContext = createContext<AppShellContextType>({
  viewMode: 'public',
  setViewMode: () => {},
  userRole: 'Public',
});

export const useAppShell = () => useContext(AppShellContext);

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  group: 'main' | 'factors' | 'analysis' | 'about';
}

const navItems: NavItem[] = [
  { label: 'Main Dashboard', href: '/', icon: Home, group: 'main' },
  { label: 'Interactive Map', href: '/map', icon: Map, group: 'main' },
  { label: 'Areas', href: '/areas', icon: Building2, group: 'main' },
  { label: 'Command View', href: '/command-centre', icon: Activity, group: 'main' },
  { label: 'Support & Enquiries', href: '/support', icon: Users, group: 'main' },
  { label: 'Factors Overview', href: '/factors', icon: BarChart3, group: 'factors' },
  { label: 'Public Service Pay & Value', href: '/factors/public-service-pay', icon: CircleDollarSign, group: 'factors' },
  { label: 'Government Performance', href: '/factors/government-performance', icon: Shield, group: 'factors' },
  { label: 'Crime & Safety', href: '/factors/crime-safety', icon: Lock, group: 'factors' },
  { label: 'Environment', href: '/factors/environment', icon: Leaf, group: 'factors' },
  { label: 'Community & Social', href: '/factors/community-social', icon: UsersIcon, group: 'factors' },
  { label: 'Employment & Income', href: '/factors/employment-income', icon: Briefcase, group: 'factors' },
  { label: 'Judicial & Legal Stress', href: '/factors/judicial-legal', icon: Scale, group: 'factors' },
  { label: 'Infrastructure & Utilities', href: '/factors/infrastructure', icon: Zap, group: 'factors' },
  { label: 'Digital Access & Technology', href: '/factors/digital-access', icon: Wifi, group: 'factors' },
  { label: 'Population & Demographics', href: '/factors/demographics', icon: UsersIcon, group: 'factors' },
];

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('public');
  const [userRole] = useState<UserRole>('Admin');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['factors']));
  const pathname = usePathname();

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const mainItems = navItems.filter((item) => item.group === 'main');
  const factorItems = navItems.filter((item) => item.group === 'factors');

  return (
    <AppShellContext.Provider value={{ viewMode, setViewMode, userRole }}>
      <div className="min-h-screen bg-cmi-bg text-white">
        {/* Top Bar */}
        <div className="bg-cmi-sidebar border-b border-cmi-border sticky top-0 z-40">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-cmi-text-muted hover:text-white"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center font-bold text-white text-sm">
                    CRI
                  </div>
                  <span className="text-sm font-medium text-cmi-text-secondary hidden md:block">
                    Community Resilience Index
                  </span>
                  <span className="text-xs text-cmi-text-muted hidden lg:block">Interactive stress & wellbeing map</span>
                </div>
                <div className="hidden lg:flex items-center gap-1">
                  <Link
                    href="/"
                    className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                      pathname === '/' ? 'bg-white/8 text-white' : 'text-cmi-text-secondary hover:bg-white/5'
                    }`}
                  >
                    Main Dashboard
                  </Link>
                  <Link
                    href="/map"
                    className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                      pathname === '/map' ? 'bg-white/8 text-white' : 'text-cmi-text-secondary hover:bg-white/5'
                    }`}
                  >
                    Map
                  </Link>
                  <Link
                    href="/command-centre"
                    className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                      pathname === '/command-centre' ? 'bg-white/8 text-white' : 'text-cmi-text-secondary hover:bg-white/5'
                    }`}
                  >
                    Command View
                  </Link>
                  <Link
                    href="/factors"
                    className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                      pathname.startsWith('/factors') ? 'bg-white/8 text-white' : 'text-cmi-text-secondary hover:bg-white/5'
                    }`}
                  >
                    Factors
                  </Link>
                  <Link
                    href="/about"
                    className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                      pathname === '/about' ? 'bg-white/8 text-white' : 'text-cmi-text-secondary hover:bg-white/5'
                    }`}
                  >
                    Methodology
                  </Link>
                  <Link
                    href="/data-sources"
                    className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                      pathname === '/data-sources' ? 'bg-white/8 text-white' : 'text-cmi-text-secondary hover:bg-white/5'
                    }`}
                  >
                    Data Sources
                  </Link>
                  <Link
                    href="/design-system"
                    className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                      pathname === '/design-system' ? 'bg-white/8 text-white' : 'text-cmi-text-secondary hover:bg-white/5'
                    }`}
                  >
                    Design System
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/" className="hidden md:flex items-center gap-1 text-[13px] text-cmi-text-muted hover:text-white">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
                <button className="p-2 text-cmi-text-muted hover:text-white" aria-label="Admin settings">
                  <Settings className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 text-[13px] text-cmi-text-secondary hover:text-white">Log in</button>
                <button className="px-4 py-2 bg-cmi-high-risk hover:bg-[#FF5252]/80 text-white rounded-lg text-[13px] font-medium">
                  Get Report
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <aside
            className={`${
              sidebarOpen ? 'w-[250px]' : 'w-0'
            } hidden lg:block transition-all duration-300 bg-cmi-sidebar border-r border-cmi-border overflow-hidden`}
          >
            <nav className="p-4 space-y-4 h-[calc(100vh-4rem)] overflow-y-auto">
              {/* MAIN Section */}
              <div>
                <button
                  onClick={() => toggleSection('main')}
                  className="flex items-center justify-between w-full text-[11px] font-semibold text-white/45 uppercase tracking-wide mb-2 hover:text-white/65"
                >
                  <span>MAIN</span>
                  {expandedSections.has('main') ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {expandedSections.has('main') && (
                  <ul className="space-y-1">
                    {mainItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] transition-colors ${
                              isActive
                                ? 'bg-white/8 text-white border-l-4 border-cmi-primary'
                                : 'text-white/65 hover:bg-white/5'
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isActive ? 'opacity-100' : 'opacity-70'}`} />
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* FACTORS Section */}
              <div>
                <button
                  onClick={() => toggleSection('factors')}
                  className="flex items-center justify-between w-full text-[11px] font-semibold text-white/45 uppercase tracking-wide mb-2 hover:text-white/65"
                >
                  <span>FACTORS</span>
                  {expandedSections.has('factors') ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {expandedSections.has('factors') && (
                  <ul className="space-y-1">
                    {factorItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] transition-colors ${
                              isActive
                                ? 'bg-white/8 text-white border-l-4 border-cmi-primary'
                                : 'text-white/65 hover:bg-white/5'
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isActive ? 'opacity-100' : 'opacity-70'}`} />
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* ANALYSIS Section */}
              <div>
                <button
                  onClick={() => toggleSection('analysis')}
                  className="flex items-center justify-between w-full text-[11px] font-semibold text-white/45 uppercase tracking-wide mb-2 hover:text-white/65"
                >
                  <span>ANALYSIS</span>
                  {expandedSections.has('analysis') ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* ABOUT Section */}
              <div>
                <button
                  onClick={() => toggleSection('about')}
                  className="flex items-center justify-between w-full text-[11px] font-semibold text-white/45 uppercase tracking-wide mb-2 hover:text-white/65"
                >
                  <span>ABOUT</span>
                  {expandedSections.has('about') ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              </div>
            </nav>
          </aside>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-64 h-full bg-cmi-sidebar border-r border-cmi-border" onClick={(e) => e.stopPropagation()}>
                <nav className="p-4 space-y-4">
                  <div>
                    <h2 className="text-[11px] font-semibold text-white/45 uppercase tracking-wide mb-3">MAIN</h2>
                    <ul className="space-y-1">
                      {mainItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] text-white/65 hover:bg-white/5"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <Icon className="w-4 h-4 opacity-70" />
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1 bg-cmi-bg text-white p-6">
            {children}
          </main>
        </div>
      </div>
    </AppShellContext.Provider>
  );
};
