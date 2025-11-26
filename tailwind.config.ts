import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CMI Design System Colors
        'cmi-bg': '#0B1220',
        'cmi-sidebar': '#0D1629',
        'cmi-card': '#111A2E',
        'cmi-card-bright': '#152038',
        'cmi-primary': '#FF7A45',
        'cmi-primary-light': '#FF875F',
        'cmi-accent': '#4DD7FA',
        'cmi-high-risk': '#FF5252',
        'cmi-moderate': '#FFC940',
        'cmi-good': '#4CAF50',
        'cmi-text-primary': '#FFFFFF',
        'cmi-text-secondary': 'rgba(255,255,255,0.78)',
        'cmi-text-muted': 'rgba(255,255,255,0.55)',
        'cmi-border': 'rgba(255,255,255,0.07)',
      },
    },
  },
  plugins: [],
}
export default config
