// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#1e40af",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  preflight: false, // disables Tailwind's base reset
  container: false,
  float: false,
  theme: {
    extend: {
      colors: {
        primary: "#ff69b4",
      },
      fontSize: {
        huge: "5rem",
      },
    },
  },
  plugins: [],
};
