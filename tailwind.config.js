/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      color: {
        'error-primary': '#F04438',
      },
      backgroundColor: {
        'brand-background': '#111322',
        'brand-secondary': '#7839EE',
        'alpha-white-90': '#0C111DE5',
        tertiary: '#1F242F',
        'error-primary': '#F04438',
        primary: '#0C111D',
        active: '#1F242F',
      },
      borderColor: {
        primary: '#333741',
        secondary: '#1F242F',
      },
      textColor: {
        'primary-900': '#F5F5F6',
        'tertiary-600': '#94969C',
        'secondary-700': '#CECFD2',
        'brand-primary-900': '#7839EE',
      },
    },
  },
  plugins: [],
};
