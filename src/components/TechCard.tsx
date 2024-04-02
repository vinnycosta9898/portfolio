import Image from 'next/image'
import { motion } from 'framer-motion'

interface TechCardProps {
  logo: string
  title: string
}

export function TechCard({ logo, title }: TechCardProps) {
  return (
    <motion.div
      className="w-[12rem] h-[12rem] rounded-lg bg-transparent backdrop-blur-xl flex flex-col items-center justify-center gap-4  hover:scale-105 transition ease-in-out delay-75"
      initial={{ scale: 0 }}
      animate={{ rotate: 720, scale: 1 }}
      transition={{
        type: 'tween',
        stiffness: 200,
        damping: 20,
      }}
    >
      <Image src={logo} alt={`Logo da ${title}`} width={120} height={120} />
      <h1 className="text-xl text-white">{title}</h1>
    </motion.div>
  )
}
