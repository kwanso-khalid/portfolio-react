/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#111827', // Dark background
        'secondary-dark': '#1F2937', // Slightly lighter dark, for cards/nav
        'border-dark-neutral': '#374151', // Borders in dark mode
        'accent-blue': '#3B82F6', // Primary accent color (e.g., Tailwind's blue-500)
        'accent-blue-hover': '#2563EB', // Darker shade for hover (e.g., blue-600)
        'text-light-primary': '#F3F4F6', // Main text color in dark mode (e.g., gray-100)
        'light-secondary': '#D1D5DB',    // Secondary text color (e.g., gray-300)
        'light-tertiary': '#9CA3AF',     // Tertiary text, placeholders (e.g., gray-400)

        // Light mode (if you implement a toggle)
        'primary-light': '#FFFFFF',
        'secondary-light': '#F9FAFB',
        'border-light-neutral': '#E5E7EB',
        'text-dark-primary': '#1F2937',
        'dark-secondary': '#4B5563',
        'dark-tertiary': '#6B7280',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      lineClamp: {
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};