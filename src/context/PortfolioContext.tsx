import { ReactNode, createContext, useRef } from 'react'

type PortfiolioContextType = {
  handleClick: (option: number) => any
}

type PortfolioContextPropviderProps = {
  children: ReactNode
}

export const PortfolioContext = createContext({} as PortfiolioContextType)

export function PortfolioContextProvider({
  children,
}: PortfolioContextPropviderProps) {
  const targetAboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  function handleClick(option: number) {
    switch (option) {
      case 1:
        targetAboutRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 2:
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 3:
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <PortfolioContext.Provider value={{ handleClick }}>
      {children}
    </PortfolioContext.Provider>
  )
}
