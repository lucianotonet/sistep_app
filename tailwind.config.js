module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  content: [
    "./pages/**/*.{js,vue}",
    "./components/**/*.{js,vue}",
    "./layouts/**/*.{js,vue}",
  ],
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography')
  ],
  theme: {    
    extend: {
      fontFamily: {
        sans: [
          '"Roboto", sans-serif', // Adicionando Roboto
          '"Open Sans", sans-serif', // Adicionando Open Sans
          '"Lexend", sans-serif', // Adicionando Lexend
        ],
        mono: [
          '"Fira Code", monospace',
          '"IBM Plex Mono", monospace',
          '"Inter", monospace',
        ],
      },      
      fontSize: {
        '2xs': '0.625rem',  // 10px
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px (padrão)
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '2.625rem',  // 42px
        '6xl': '3rem',      // 48px
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        "4xl": "calc(var(--radius) * 4)",
        "3xl": "calc(var(--radius) * 3)",
        "2xl": "calc(var(--radius) * 2)",
        xl: "calc(var(--radius) * 1.5)",
        lg: "calc(var(--radius) * 1.25)",
        md: "calc(var(--radius) / 2)",
        sm: "calc(var(--radius) / 4)",
        xs: "calc(var(--radius) / 8)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
}