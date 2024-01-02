import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      gray_100: '#F8F8F2',
      gray_400: '#44475A',
      gray_500: '#282A36',
      gray_700: '#20222A',

      pink: '#FF79C6',
      purple: '#BD93F9',
      yellow: '#F1FA8C',
    },

    fontSize: {
      xsm: '0.8rem',
      sm: '1rem',
      md: '1.25rem',
      lg: '2rem',
      xlg: '3rem',
    },
  },
})
