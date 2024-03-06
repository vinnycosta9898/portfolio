import { styled, keyframes, theme } from '.'
import { media } from './media'

const slideToLeft = keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(0%)' },
})

const slidetoRight = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0%)' },
})

export const MainContainer = styled('main', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '10rem',
  marginTop: '5rem',

  h1: {
    color: '$purple',
    marginTop: '1rem',

    [`@media ${media.medium}`]: {
      fontSize: theme.fontSize.lg,
    },

    [`@media ${media.mobile}`]: {
      fontSize: theme.fontSize.md,
    },

    [`@media ${media.small}`]: {
      fontSize: theme.fontSize.md,
    },
  },

  [`@media ${media.medium}`]: {
    padding: '0rem',
    alignItems: 'center',
  },

  [`@media ${media.tablet}`]: {
    padding: '0rem',
    alignItems: 'center',
  },

  [`@media ${media.mobile}`]: {
    padding: '0rem',
    alignItems: 'center',
  },
})

export const DescriptionContainer = styled('div', {
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  animation: `${slidetoRight} 4000ms`,

  '#title': {
    color: '$yellow',
  },

  h1: {
    color: '$purple',
    fontSize: theme.fontSize.xlg,

    [`@media ${media.medium}`]: {
      fontSize: theme.fontSize.lg,
    },

    [`@media ${media.tablet}`]: {
      fontSize: theme.fontSize.sm,
    },

    [`@media ${media.mobile}`]: {
      fontSize: theme.fontSize.xsm,
    },
  },

  h2: {
    color: '$pink',
    fotnSize: theme.fontSize.lg,
    [`@media ${media.medium}`]: {
      fontSize: theme.fontSize.md,
    },

    [`@media ${media.tablet}`]: {
      fontSize: theme.fontSize.sm,
    },

    [`@media ${media.mobile}`]: {
      fontSize: theme.fontSize.xsm,
    },
  },

  span: {
    color: '$gray_100',
    fontSize: theme.fontSize.md,

    [`@media ${media.medium}`]: {
      fontSize: theme.fontSize.sm,
    },

    [`@media ${media.tablet}`]: {
      fontSize: theme.fontSize.xsm,
    },

    [`@media ${media.mobile}`]: {
      fontSize: theme.fontSize.xsm,
    },
  },

  [`@media ${media.large}`]: {
    padding: '0rem',
    alignItems: 'center',
  },

  [`@media ${media.medium}`]: {
    padding: '0rem',
    alignItems: 'center',
  },

  [`@media ${media.small}`]: {
    padding: '0rem',
    alignItems: 'center',
  },

  [`@media ${media.tablet}`]: {
    padding: '0rem',
    alignItems: 'center',
  },

  [`@media ${media.mobile}`]: {
    padding: '0rem',
    alignItems: 'center',
  },
})

export const SocialContainer = styled('div', {
  marginTop: theme.fontSize.sm,

  svg: {
    width: '2.5rem',
    height: '2.5rem',
    marginRight: '0.5rem',
    cursor: 'pointer',
  },
})

export const AboutMeContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '2rem',

  animation: `${slideToLeft} 4000ms`,

  h1: {
    color: '$gray_100',
    fontSize: theme.fontSize.lg,

    [`@media ${media.medium}`]: {
      fontSize: theme.fontSize.xsm,
    },

    [`@media ${media.tablet}`]: {
      fontSize: theme.fontSize.sm,
    },
  },

  h2: {
    color: '$gray_100',
    fontSize: theme.fontSize.lg,

    [`@media ${media.medium}`]: {
      fontSize: theme.fontSize.sm,
    },

    [`@media ${media.tablet}`]: {
      fontSize: theme.fontSize.xsm,
    },

    [`@media ${media.mobile}`]: {
      fontSize: theme.fontSize.xsm,
    },
  },

  [`@media ${media.large}`]: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  [`@media ${media.medium}`]: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  [`@media ${media.mobile}`]: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  [`@media ${media.tablet}`]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const AboutMe = styled('div', {
  width: '90%',
  display: 'flex',
  flexDirection: 'column',

  h1: {
    color: '$purple',
    fontSize: theme.fontSize.lg,
    [`@media ${media.mobile}`]: {
      fontSize: theme.fontSize.sm,
    },
  },

  h2: {
    fontSize: theme.fontSize.md,
    [`@media ${media.tablet}`]: {
      fontSize: theme.fontSize.sm,
    },

    [`@media ${media.mobile}`]: {
      fontSize: theme.fontSize.xsm,
    },
  },

  [`@media ${media.medium}`]: {
    width: '80%',
  },
})

export const PhotoContainer = styled('div', {
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-end',

  img: {
    width: '20rem',
    height: '20rem',
    borderRadius: '16px',

    [`@media ${media.large}`]: {
      width: '18rem',
      height: '18rem',
      marginTop: '2rem',
    },

    [`@media ${media.medium}`]: {
      width: '16rem',
      height: '16rem',
      marginTop: '2rem',
    },

    [`@media ${media.tablet}`]: {
      width: '14rem',
      height: '14rem',
      marginTop: '2rem',
    },

    [`@media ${media.mobile}`]: {
      width: '12rem',
      height: '12rem',
      marginTop: '2rem',
    },
  },
})

export const TechsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2.5rem',
  flexWrap: 'wrap',
})

export const ToolsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2.5rem',
  flexWrap: 'wrap',
})

export const ExperienceContainer = styled('div', {
  width: '100%',
  marginTop: '5rem',

  '#first_tag': {
    color: '$purple',
  },

  [`@media ${media.medium}`]: {
    width: '90%',
    height: 'max-content',
    marginTop: '2rem',
  },

  [`@media ${media.mobile}`]: {
    width: '80%',
    height: 'max-content',
    marginTop: '2rem',
  },
})

export const WorkContainer = styled('div', {
  display: 'flex',
})

export const ProjectsContainer = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',

  '#first_tag': {
    color: '$purple',
  },

  [`@media ${media.mobile}`]: {
    alignItems: 'center',
  },
})

export const Projects = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  flexWrap: 'wrap',

  [`@media ${media.large}`]: {
    width: '100%',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },

  [`@media ${media.medium}`]: {
    width: '100%',
    justifyContent: 'flex-start',

    display: 'block',
  },

  [`@media ${media.tablet}`]: {
    width: '100%',
    justifyContent: 'flex-start',
    display: 'block',
  },

  [`@media ${media.mobile}`]: {
    justifyContent: 'flex-start',
    display: 'block',
  },
})

export const Footer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',

  h1: {
    color: '$purple',
    fontSize: theme.fontSize.sm,
    margin: '2rem',
  },
})
