/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss'

export default <Partial<Config>>{
  mode: 'jit',
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      borderRadius: {
        20: '20px',
        23: '23px',
      },
      backgroundImage: {
        'white-overlay-blue':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0)), #1D61E7',
      },
      boxShadow: {
        'input-md':
          '0px 2px 4px -2px rgba(23, 23, 23, 0.06), 0px 4px 8px -2px rgba(23, 23, 23, 0.10)',
        'service-card': '0px 4px 16px 0px rgba(16, 22, 28, 0.04);',
        'blue-custom':
          '0px 1px 2px 0px rgba(37, 62, 167, 0.48), 0px 0px 0px 1px #375DFB',
        'custom-select':
          '0px 268px 75px 0px rgba(50, 57, 82, 0.00), 0px 172px 69px 0px rgba(50, 57, 82, 0.01), 0px 97px 58px 0px rgba(50, 57, 82, 0.03), 0px 43px 43px 0px rgba(50, 57, 82, 0.05), 0px 11px 24px 0px rgba(50, 57, 82, 0.06)',
      },
      colors: {
        primary: {
          DEFAULT: '#1D61E7',
        },
        black: {
          DEFAULT: '#020617',
          100: '#334155',
        },
        blue: {
          DEFAULT: '#3761E9',
          100: '#D9E1FB',
          200: '#A4B8F8',
          300: '#077E94',
          400: '#1E293B',
          500: '#2563EB',
          600: '#3B82F6',
          700: '#06B6D4',
        },
        gray: {
          100: '#EDF1F3',
          200: '#ACB5BB',
          300: '#CBD5E1',
          400: '#475569',
          500: '#94A3B8',
          600: '#64748B',
          700: '#F8FAFC',
          800: '#F1F5F9',
          900: '#E2E8F0',
        },
        red: {
          DEFAULT: '#F43F5E',
          100: '#FFF1F2',
        },
        yellow: {
          DEFAULT: '#CAA244',
          100: '#9f8037',
          200: '#F59E0B',
          300: '#FEF3C7',
          400: '#FFFBEB',
        },
        green: {
          DEFAULT: '#16A34A',
          100: '#BBF7D0',
          200: '#DCFCE7',
          300: '#22C55E',
        },
      },
      letterSpacing: {
        '0.5': '-0.5%',
      },
      lineHeight: {
        130: '130%',
        140: '140%',
        150: '150%',
        160: '160%',
      },
      fontSize: {
        20: '20px',
        32: '32px',
        40: '40px',
      },
      backdropBlur: {
        custom: '11.375551223754883px',
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void
    }) {
      addUtilities({
        '.border-gradient-white': {
          'border-width': '1px',
          'border-image-slice': '1',
          'border-image-source':
            'linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0))',
          'main-section-dropdown':
            '18px 381px 107px 0px rgba(50, 57, 82, 0.00), 11px 244px 98px 0px rgba(50, 57, 82, 0.01), 6px 137px 82px 0px rgba(50, 57, 82, 0.03), 3px 61px 61px 0px rgba(50, 57, 82, 0.05), 1px 15px 34px 0px rgba(50, 57, 82, 0.06)',
        },
      })
    },
  ],
  corePlugins: {
    preflight: true,
  },
}
