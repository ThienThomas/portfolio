/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gradientFrom: '#09203F',
        gradientTo: '#537895'
      },
      fontFamily: {
        body: ['"Open Sans"'],
        momo: ['ui-monospace']
      }
    },
    screens: {
      ssm: '360px',
      msm: '480px',
      ...defaultTheme.screens
    },
    fontSize: {
      ssm: ['12px', '16px'],
      msm: ['13px', '17px'],
      ...defaultTheme.fontSize
    }
  },
  plugins: []
};
