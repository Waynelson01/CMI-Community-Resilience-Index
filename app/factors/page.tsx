import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { TrendArrow } from '@/components/ui/TrendArrow';
import { Tag } from '@/components/ui/Tag';
import { mockFactors } from '@/lib/mockData';
import { ArrowRight } from 'lucide-react';

export default function FactorsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Factor Explorer"
        subtitle="Explore individual factors that contribute to community stress levels"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockFactors.map((factor) => (
          <Link key={factor.id} href={`/factors/${factor.id}`}>
            <Card
              title={factor.name}
              className="hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{factor.score.toFixed(1)}</span>
                  <span className="text-gray-500 dark:text-gray-400">/ 10</span>
                </div>
                <div className="flex items-center justify-between">
                  <TrendArrow direction={factor.trend} percent={factor.trendPercent} />
                  {factor.trend === 'up' && <Tag variant="danger">Pressure</Tag>}
                  {factor.trend === 'down' && <Tag variant="success">Improving</Tag>}
                  {factor.trend === 'flat' && <Tag variant="neutral">Stable</Tag>}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{factor.description}</p>
                <div className="flex items-center gap-2 text-cmi-blue font-medium text-sm pt-2">
                  View Details <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

