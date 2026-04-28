/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        /* OKG Light Premium Palette */
        'okw':        '#FFFFFF',
        'ok-soft':    '#FCFDFF',
        'ok-bg':      '#F7F9FF',
        'ok-bg2':     '#F2F6FF',
        'ok-tint':    '#EAF0FF',
        'ok-accent':  '#E3EBFF',
        'ok-gold':    '#FFF6E8',
        'ok-champ':   '#FDF3E2',
        'ok-gold-m':  '#E8C48E',
        'ok-amber':   '#F2D7A6',
        'ok-blue':    '#6E85E8',
        'ok-blue-l':  '#8FA2F2',
        'ok-head':    '#5F6D9A',
        'ok-body':    '#7C86A8',
        'ok-muted':   '#97A0BC',
        'ok-border':  '#E6EBF5',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
