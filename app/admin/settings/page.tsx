import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <PageHeader
        title="Settings"
        subtitle="Configure CMI application settings"
      />

      <Card title="General Settings">
        <p className="text-gray-600 dark:text-gray-400">
          Settings configuration will be available in a future update.
        </p>
      </Card>

      <Card title="Data Sources">
        <p className="text-gray-600 dark:text-gray-400">
          Manage data source connections and update schedules.
        </p>
      </Card>

      <Card title="User Management">
        <p className="text-gray-600 dark:text-gray-400">
          Configure user roles and permissions.
        </p>
      </Card>

      <Card title="Notifications">
        <p className="text-gray-600 dark:text-gray-400">
          Set up email and system notifications.
        </p>
      </Card>
    </div>
  );
}

