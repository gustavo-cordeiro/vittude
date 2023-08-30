import type { Config } from 'tailwindcss'
import Colors from 'tailwindcss/colors';

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
      colors: {
        vittude: {
          '50': '#fdeeec',
          '100': '#faccc6',
          '200': '#f7a9a1',
          '300': '#F6988E',
          '400': '#f4877b',
          '500': '#f26b5b',
          'primary': '#f26b5b',
          '600': '#f05442',
          '700': '#ed311d',
          '800': '#d02411',
          '900': '#aa1d0e',
          '950': '#711409',
        }
      }
    },
  },
  plugins: [],
}
export default config
