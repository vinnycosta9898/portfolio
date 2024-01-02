import { styled } from '@/styles'

export const WorkCardContainer = styled('div', {
  width: '40rem',
  height: 'max-content',
  backgroundColor: '#ffffff10',
  'backdrop-filter': 'blur(12px)',
  '-webkit-backdrop-filter': 'blur(12px)',
  borderRadius: '16px',
  cursor: 'pointer',
  marginTop: '2rem',
  padding: '1rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  h1: {
    color: '$gray_100',
    marginLeft: '0.5rem',
  },

  p: {
    color: '$pink',
    marginLeft: '0.5rem',
  },

  span: {
    color: '$gray_400',
    margin: '1rem 0.5rem',
  },

  li: {
    color: '$gray_100',
    marginLeft: '0.5rem',
  },
})
