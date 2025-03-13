const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 20s ease infinite",
        "aurora-slow": "aurora 30s ease infinite",
        "aurora-reverse": "aurora-reverse 25s ease infinite",
        "beam-move": "beam-move 15s ease-in-out infinite",
        "beam-move-slow": "beam-move 25s ease-in-out infinite",
        "beam-move-reverse": "beam-move-reverse 20s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          "0%": {
            backgroundPosition: "0% 50%",
            opacity: 1,
          },
          "50%": {
            backgroundPosition: "100% 50%",
            opacity: 0.7,
          },
          "100%": {
            backgroundPosition: "0% 50%",
            opacity: 1,
          },
        },
        "aurora-reverse": {
          "0%": {
            backgroundPosition: "100% 50%",
            opacity: 0.7,
          },
          "50%": {
            backgroundPosition: "0% 50%",
            opacity: 1,
          },
          "100%": {
            backgroundPosition: "100% 50%",
            opacity: 0.7,
          },
        },
        "beam-move": {
          "0%": {
            transform: "translateX(0%) translateY(0%) rotate(20deg)",
          },
          "33%": {
            transform: "translateX(5%) translateY(-5%) rotate(22deg)",
          },
          "66%": {
            transform: "translateX(-5%) translateY(5%) rotate(18deg)",
          },
          "100%": {
            transform: "translateX(0%) translateY(0%) rotate(20deg)",
          }
        },
        "beam-move-reverse": {
          "0%": {
            transform: "translateX(0%) translateY(0%) rotate(-15deg)",
          },
          "33%": {
            transform: "translateX(-5%) translateY(-5%) rotate(-13deg)",
          },
          "66%": {
            transform: "translateX(5%) translateY(5%) rotate(-17deg)",
          },
          "100%": {
            transform: "translateX(0%) translateY(0%) rotate(-15deg)",
          }
        }
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  
  addBase({
    ":root": {
      ...newVars,
      "--transparent": "transparent"
    },
  });
}
