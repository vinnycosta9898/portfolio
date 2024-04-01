import Link from "next/link";

export function Header(){
  return(
    <div className="w-full h-[6rem] flex justify-around items-center">
      <Link href="/" className="text-xl text-white font-bold">Inicio</Link>
      <button className="text-xl text-white font-bold">Sobre Mim</button>
      <button className="text-xl text-white font-bold">Experiência</button>
      <button className="text-xl text-white font-bold">Projetos</button>
      <button className="text-xl text-white font-bold">Contato</button>
    </div>
  )
}