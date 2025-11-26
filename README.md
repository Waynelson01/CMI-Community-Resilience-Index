# CMI – Community Resilience Index

A comprehensive web application for transparent, data-driven community stress scoring across New South Wales.

## Features

- **Public Dashboard**: Overview of NSW stress scores, regional comparisons, and factor summaries
- **Factor Explorer**: Detailed breakdown of individual factors with sub-factor analysis
- **Command Centre**: Customizable monitoring dashboard with live data widgets
- **Admin Tools**:
  - Canvas Builder for designing custom layouts
  - Data Mapping & Legends for managing data sources
  - Content Analytics for tracking page views and engagement
  - Customer Management for handling enquiries and feedback
  - Government Performance monitoring and department reviews
- **Transparent Methodology**: Public documentation of scoring methods and data sources

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Recharts** (for data visualization)
- **Lucide React** (for icons)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:6035](http://localhost:6035) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing dashboard
│   ├── about/             # About CMI page
│   ├── factors/           # Factor explorer pages
│   ├── command-centre/    # Command centre dashboard
│   └── admin/             # Admin pages
│       ├── canvas/        # Canvas builder
│       ├── data-mapping/  # Data mapping tool
│       ├── content-analytics/
│       ├── customers/     # Customer management
│       ├── gov-performance/
│       └── settings/
├── components/            # React components
│   ├── ui/               # Design system components
│   ├── AppShell.tsx      # Main layout component
│   └── ChartWidget.tsx   # Chart widget component
├── lib/                  # Utilities and mock data
│   └── mockData.ts       # Mock data for development
├── types/                # TypeScript type definitions
│   └── index.ts
└── tailwind.config.ts    # Tailwind CSS configuration
```

## Design System

### Colors

- **CMI Blue** (`cmi-blue`): Primary brand color
- **CMI Teal** (`cmi-teal`): Secondary color
- **CMI Amber** (`cmi-amber`): Warning/attention
- **CMI Green** (`cmi-green`): Success/positive
- **CMI Red** (`cmi-red`): Risk/high stress

### Components

- `<Card>`: Container with optional title, subtitle, icon, badge, and footer
- `<Tag>`: Status indicator with variants (success, warning, danger, neutral)
- `<Badge>`: Small badge with variants (new, beta, info)
- `<PageHeader>`: Page title with optional subtitle and actions
- `<ToggleSwitch>`: Toggle switch for settings
- `<PillLegend>`: Inline legend for status indicators
- `<InfoPopup>`: Information popup with edit capability in admin mode
- `<TrendArrow>`: Trend indicator with direction and percentage
- `<ChartWidget>`: Editable chart component with data table

## Admin Mode

Toggle between Public View and Admin Edit mode using the switch in the top navigation bar. In Admin mode:

- Edit controls and drag handles are visible
- Info popups become editable
- Canvas builder and admin tools are accessible
- Widgets can be moved and configured

## Mock Data

The application uses mock data located in `lib/mockData.ts`. This includes:

- Factor scores and trends
- Regional stress scores
- Customer enquiries
- Content analytics
- Government department performance
- Data mappings

Replace with real data sources when integrating with backend APIs.

## Development Notes

- All pages use the shared `AppShell` layout component
- Admin/public view state is managed via React Context
- Chart widgets support editing in admin mode
- Drag-and-drop functionality is prepared but requires additional implementation
- Data mapping visualization uses SVG for connection lines

## Future Enhancements

- Real data API integration
- Full drag-and-drop implementation for canvas builder
- User authentication and authorization
- Real-time data updates
- Export functionality for reports
- Advanced chart types and visualizations
- Mobile-responsive optimizations

## License

[Your License Here]

