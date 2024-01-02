import { styled } from '@stitches/react'

export const ProjectContainer = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
export const TitleContainer = styled('h1', {
  color: '$gray_100',
  fontSize: '3rem',
  marginTop: '2rem',
})

export const TechsUtilizedContainer = styled('span', {
  color: '$yellow',
  fontSize: '1.25rem',
})

export const DescriptionContainer = styled('div', {
  width: '40rem',
  marginTop: '2rem',
  textAlign: 'center',

  h1: {
    color: '$purple',
  },
})

export const ImageContainer = styled('div', {
  width: '60rem',
})

export const ImageProject = styled('img', {
  width: '25rem',
  height: '30rem',
  borderRadius: '8px',
})
