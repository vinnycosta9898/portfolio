import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      blue: '#170B2A',
      blue_twitter: '#00ACEE',
      blue_twitter_opacity: '#00ACEE80',
      transparent: '#FFFFFF10',
      pink: '#FF79C6',
      purple: '#BD93F9',
      red: '#FF2D19',
      yellow: '#F1FA8C',
      white: '#FFF'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        'xlg': '1700px',
        'lg': '1440px',
        'md': '1150px',
        'sm': '800px',
        'xsm': '200px'
      }
      
    },
  },
  plugins: [],
};
export default config;
