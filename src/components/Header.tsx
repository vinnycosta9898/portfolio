import Link from 'next/link'

interface HeaderProps {
  handleClick: (option: number) => void
}

export function Header({ handleClick }: HeaderProps) {
  return (
    <div className="w-full h-[6rem] flex justify-around items-center">
      <Link
        href="/"
        className="text-xl text-white font-bold hover:text-blue_twitter lg:text-xl md:text-lg sm:text-lg xsm:text-sm"
      >
        Inicio
      </Link>
      <button
        className="text-xl text-white font-bold hover:text-blue_twitter lg:text-xl md:text-lg sm:text-lg xsm:text-sm"
        onClick={() => handleClick(1)}
      >
        Sobre Mim
      </button>
      <button
        className="text-xl text-white font-bold hover:text-blue_twitter lg:text-xl md:text-lg sm:text-lg xsm:text-sm"
        onClick={() => handleClick(2)}
      >
        Experiência
      </button>
      <button
        className="text-xl text-white font-bold hover:text-blue_twitter lg:text-xl md:text-lg sm:text-lg xsm:text-sm"
        onClick={() => handleClick(3)}
      >
        Projetos
      </button>
      <button
        className="text-xl text-white font-bold hover:text-blue_twitter lg:text-xl md:text-lg sm:text-lg xsm:text-sm"
        onClick={() => handleClick(4)}
      >
        Contato
      </button>
    </div>
  )
}
