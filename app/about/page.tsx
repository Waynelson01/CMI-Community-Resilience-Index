import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { InfoPopup } from '@/components/ui/InfoPopup';
import { Badge } from '@/components/ui/Badge';
import { FileText, CheckCircle2, BarChart3, GitBranch } from 'lucide-react';

export default function AboutPage() {
  const dataSources = ['ABS Census 2021', 'NSW Government Statistics', 'Transport for NSW', 'NSW Health', 'NSW Police'];

  return (
    <div className="space-y-6 max-w-4xl">
      <PageHeader
        title="About CMI"
        subtitle="Transparent, data-driven community stress scoring for NSW"
      />

      {/* What is CMI? */}
      <Card
        title="What is CMI?"
        icon={BarChart3}
      >
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            The Community Resilience Index (CMI) is a comprehensive scoring system that measures community stress levels
            across New South Wales. Each suburb, Local Government Area (LGA), and region receives a score from 1 to 10,
            where higher scores indicate greater stress and lower resilience.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Unlike other indices that provide aggregate scores without transparency, CMI breaks down stress into
            individual factors—such as Cost of Living, Housing, Crime & Safety, and Transport & Accessibility—allowing
            communities, researchers, and policymakers to understand exactly what drives stress in their area.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <InfoPopup
              data={{
                title: 'CMI Scoring Methodology',
                description: 'Scores are calculated using weighted factors based on publicly available data. Each factor is normalized to a 1-10 scale, with 10 representing the highest stress level observed across NSW.',
                dataSources,
                version: 'Model v1.0 – 2025',
                lastUpdated: '2025-01-15',
              }}
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">View Methodology</span>
          </div>
        </div>
      </Card>

      {/* Why CMI? */}
      <Card
        title="Why CMI?"
        icon={CheckCircle2}
      >
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Clarity:</strong> No more guessing what makes a community
            stressed. CMI shows you exactly which factors contribute to stress levels.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Comparability:</strong> Compare any suburb, LGA, or
            region against others using the same methodology and data sources.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">No Guesswork:</strong> Every score is backed by
            documented data sources and a transparent methodology that you can review and verify.
          </p>
        </div>
      </Card>

      {/* Core Principles */}
      <Card
        title="Core Principles"
        icon={GitBranch}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-cmi-blue-50 dark:bg-cmi-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-cmi-blue mb-2">Transparency</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              All data sources, methodologies, and calculations are publicly documented and accessible.
            </p>
          </div>
          <div className="p-4 bg-cmi-teal-50 dark:bg-cmi-teal-900/20 rounded-lg">
            <h4 className="font-semibold text-cmi-teal mb-2">Data-Driven</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Every score is based on real, verifiable data from authoritative sources like ABS and NSW Government.
            </p>
          </div>
          <div className="p-4 bg-cmi-green-50 dark:bg-cmi-green-900/20 rounded-lg">
            <h4 className="font-semibold text-cmi-green mb-2">Comparability</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Consistent methodology ensures fair comparison across all regions and time periods.
            </p>
          </div>
          <div className="p-4 bg-cmi-amber-50 dark:bg-cmi-amber-900/20 rounded-lg">
            <h4 className="font-semibold text-cmi-amber mb-2">Versioning</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Methodology versions are tracked, allowing historical analysis and methodology improvements over time.
            </p>
          </div>
        </div>
      </Card>

      {/* What Makes CMI Unique */}
      <Card
        title="What Makes CMI Unique?"
        icon={FileText}
      >
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">
              No one else provides this level of transparent, factor-by-factor, suburb-level stress scoring with public
              methodology & versioning.
            </strong>
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-cmi-blue mt-1">✓</span>
              <span>Suburb-level granularity, not just regional averages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cmi-blue mt-1">✓</span>
              <span>Factor-by-factor breakdowns with sub-factor details</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cmi-blue mt-1">✓</span>
              <span>Public methodology documentation with version control</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cmi-blue mt-1">✓</span>
              <span>Regular updates with clear data source attribution</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cmi-blue mt-1">✓</span>
              <span>Command Centre view for real-time monitoring and trends</span>
            </li>
          </ul>
        </div>
      </Card>

      {/* Data Sources Legend */}
      <Card title="Data Sources">
        <div className="flex flex-wrap gap-2">
          {dataSources.map((source, index) => (
            <Badge key={index} variant="info">
              {source}
            </Badge>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Badge variant="beta">Model v1.0 – 2025</Badge>
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

