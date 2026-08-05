/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // cool graphite/ink instead of the near-navy-black or warm-cream defaults
        ink: {
          DEFAULT: '#1C1F1D',
          soft: '#454B47',
          line: '#DBDED7',
        },
        paper: {
          DEFAULT: '#F4F5F1',
          dim: '#E9EBE3',
        },
        // deep spruce green — a lab/field-notebook colour, not the usual
        // teal/terracotta/neon defaults
        signal: {
          DEFAULT: '#2F5D45',
          bright: '#3F7A5B',
          dim: '#1E3D2C',
        },
        // ochre used only for small status/priority marks
        amber: {
          DEFAULT: '#B5852B',
          bright: '#C99C42',
        },
        slate: {
          DEFAULT: '#454B47',
          soft: '#767C74',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(8px,-10px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        dash: {
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        drift: 'drift 7s ease-in-out infinite',
        fadeUp: 'fadeUp .7s cubic-bezier(.2,.7,.2,1) both',
        dash: 'dash 2.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
