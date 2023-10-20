import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      pictonBlue: {
        '50': '#eff9ff',
        '100': '#dff3ff',
        '200': '#b7e9ff',
        '300': '#77d9ff',
        '400': '#2fc6ff',
        '500': '#04aef0',
        '600': '#008dd0',
        '700': '#0070a8',
        '800': '#015f8b',
        '900': '#084e72',
        '950': '#05324c',
      }
    },
  },
  plugins: [],
}
export default config
