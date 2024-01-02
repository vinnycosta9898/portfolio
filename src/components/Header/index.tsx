/* eslint-disable no-new */
import { HeaderContainer, TitleContainer, NavigationContainer } from './styles'
import { GREATVIBES, POPPINS_700 } from '@/pages'

interface HeaderProps {
  handleClick: (option: number) => void
}

export default function Header({ handleClick }: HeaderProps) {
  return (
    <HeaderContainer>
      <TitleContainer>
        <h1 className={GREATVIBES.className}>Vinicius Costa</h1>
      </TitleContainer>

      <NavigationContainer>
        <button
          className={POPPINS_700.className}
          onClick={() => handleClick(1)}
        >
          About
        </button>
        <button
          className={POPPINS_700.className}
          onClick={() => handleClick(2)}
        >
          Experience
        </button>
        <button
          className={POPPINS_700.className}
          onClick={() => handleClick(3)}
        >
          Projects
        </button>
      </NavigationContainer>
    </HeaderContainer>
  )
}
