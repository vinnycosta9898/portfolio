import { styled } from '@/styles'
import { media } from '@/styles/media'

export const ProjectCardContainer = styled('div', {
  width: '30rem',
  height: '15rem',
  backgroundColor: '#ffffff10',
  backdropfilter: 'blur(12px)',
  '-webkit-backdrop-filter': 'blur(12px)',
  borderRadius: '16px',
  cursor: 'pointer',
  padding: '1rem',
  margin: '1rem',

  h1: {
    color: '$gray_100',
  },

  p: {
    color: '$purple',
    margin: '0.5rem 0',
  },

  'span:first-of-type': {
    color: '$yellow',
    margin: '0 0.5rem',
  },

  span: {
    color: '$pink',
  },

  '&:hover': {
    transform: 'scale(1.05)',
    transition: 0.5,
  },

  [`@media ${media.medium}`]: {
    width: '25rem',
    height: 'max-content',
    marginTop: '2rem',
  },

  [`@media ${media.small}`]: {
    width: '25rem',
    height: 'max-content',
    margin: '2rem 0',
  },

  [`@media ${media.tablet}`]: {
    width: '20rem',
    height: 'max-content',
    marginTop: '2rem',
  },

  [`@media ${media.mobile}`]: {
    width: '20rem',
    height: 'max-content',
    marginTop: '2rem',
  },
})
