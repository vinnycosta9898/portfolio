import { styled } from '@stitches/react'

export const TechCardContainer = styled('div', {
  width: '10rem',
  height: '10rem',
  backgroundColor: '#ffffff10',
  'backdrop-filter': 'blur(12px)',
  '-webkit-backdrop-filter': 'blur(12px)',
  borderRadius: '16px',
  cursor: 'pointer',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '1rem',

  span: {
    color: '#fff',
    fontSize: '1.25rem',
    display: 'block',
    whiteSpace: 'pre-line',
    textAlign: 'center',
  },

  '&:hover': {
    transform: 'scale(1.05)',
    transition: 0.5,
  },
})
