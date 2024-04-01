import Image from "next/image"

export function Avatar(){
  return(
    <Image
      src={'https://github.com/vinnycosta9898.png'}
      alt="Image de perfil do Github"
      width={320}
      height={320}
      priority
      quality={100}
      className="rounded-[999px] mt-8"
    />
  )
}