import androidStudioImg from '../assets/android-studio.svg'
import xcodeImg from '../assets/Xcode.svg'

interface ToolsProps {
  id: string
  name: string
  imgUrl: string
}

export const tools: ToolsProps[] = [
  {
    id: '1',
    name: 'Android Studio',
    imgUrl: androidStudioImg,
  },
  {
    id: '2',
    name: 'Xcode',
    imgUrl: xcodeImg,
  },
  {
    id: '3',
    name: 'VSCode',
    imgUrl: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
  },

  {
    id: '4',
    name: 'GIT',
    imgUrl: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
  },

  {
    id: '5',
    name: 'Postman',
    imgUrl: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
  },
]
