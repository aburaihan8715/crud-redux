/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ef3997",

          secondary: "#73dd49",

          accent: "#0275e0",

          neutral: "#292636",

          "base-100": "#3a3a3b",

          info: "#3565de",

          success: "#32cda9",

          warning: "#db8d06",

          error: "#eb7577",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
