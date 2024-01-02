import { styled, theme } from '@/styles'
import { media } from '@/styles/media'

export const HeaderContainer = styled('header', {
  width: '100%',
  height: '5rem',
  backgroundColor: '$gray_500',
  borderBottom: '0.5px solid $gray_100',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  position: 'fixed',
  zIndex: 2,
})

export const TitleContainer = styled('div', {
  h1: {
    color: '$purple',
    fontSize: theme.fontSize.lg,

    [`@media ${media.small}`]: {
      fontSize: theme.fontSize.md,
    },

    [`@media ${media.mobile}`]: {
      fontSize: theme.fontSize.sm,
    },
  },
})

export const NavigationContainer = styled('nav', {
  width: 'max-content',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-around',

  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '$purple',
    fontSize: '1.25rem',
    margin: '0 1rem',

    '&:hover': {
      color: '$yellow',
    },

    [`@media ${media.small}`]: {
      fontSize: theme.fontSize.sm,
    },

    [`@media ${media.mobile}`]: {
      fontSize: theme.fontSize.xsm,
    },
  },
})
