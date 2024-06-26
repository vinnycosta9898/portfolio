import Typewriter from 'typewriter-effect'

export function TypeWriterName() {
  return (
    <div className="font-bold text-4xl text-white mt-8 lg:text-4xl md:text-3xl xsm:text-2xl">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Vinicius Costa')
            .pauseFor(2500)
            .start()
            .deleteAll()
            .typeString("I'm am Full Stack developer")
        }}
        options={{
          cursor: '',
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )
}
