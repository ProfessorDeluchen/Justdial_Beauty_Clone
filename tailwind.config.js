/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       // We can add specific overrides here if needed later,
       // but for now, we'll rely on default Tailwind colors.
       colors: {
        // Example: Define a primary text color if needed
        // 'text-primary': '#333333',
       }
    },
  },
  plugins: [],
};
