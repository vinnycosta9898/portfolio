import { globalCss } from '.'

export const globalStyle = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    textDecoration: 'none',
    overflowX: 'hidden',
  },

  body: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '$gray_700',
  },

  '::-webkit-scrollbar': {
    width: '0.5rem',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#ffffff10',
    borderRadius: '8px',
  },
})
