/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",                    // 👉 index.html that sits at project root
    "./src/**/*.{js,jsx,ts,tsx}",      // 👉 every .js/.jsx/.ts/.tsx file in src/ and its sub-folders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

