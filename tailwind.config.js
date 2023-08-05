/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "960px",
      xl: "1440px",
    },
    extend: {
      colors: {
        vd_blue: "hsl(220, 13%, 13%)",
        dg_blue: "hsl(219, 9%, 45%)",
        g_blue: "hsl(220, 14%, 75%)",
        lg_blue: "hsl(223, 64%, 98%)",
        orange: "hsl(26, 100%, 55%)",
        p_orange: "hsl(25, 100%, 94%)",
      },
    },
  },
  plugins: [],
};
