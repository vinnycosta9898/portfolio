import Image from 'next/image'

export function Avatar() {
  return (
    <Image
      src={'https://github.com/vinnycosta9898.png'}
      alt="Image de perfil do Github"
      width={320}
      height={320}
      priority
      quality={100}
      className="rounded-[999px] mt-8 lg:w-[24rem] lg:h-[24rem] md:w-[20rem] md:h-[20rem] xsm:w-[15rem] xsm:h-[15rem]"
    />
  )
}
