module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Georgia, ui-serif,Cambria, "Times New Roman", Times, serif',
      poppins: "Poppins, sans-serif",
    },
    fontSize: {
      h1md: "calc((4 - 1) * 1.2vw + 1rem)",
      h1: "calc(4 * 1rem)",
      headerTitleMobile: "calc((2 - 1) * 1.2vw + 1rem)",
      headerTitle: "calc(2 * 1rem)",
      copyMobile: "calc((.9 - 1) * 1.2vw + 1rem)",
      copy: "calc(.9 * 1rem)",
      pageTitle: "calc((4 - 1) * 1.2vw + 1rem)",
      pageTitleMobile: "calc((4 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
      nextPage: "calc((1.6 - 1) * 1.2vw + 1rem)",
      nextPageMobile: "18px",
    },
    backgroundPosition: {
      frontpageBG: "50% 34%",
    },
    extend: {
      padding: {
        copy: "calc(1vmax / 10)",
      },
      lineHeight: {
        pageTitle: "calc(1.4 * (1 + (1 - 4)/25))",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
