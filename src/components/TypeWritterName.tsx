import Typewriter from 'typewriter-effect';

export function TypeWriterName(){
  return(
    <div className="font-bold text-4xl text-white mt-8">
      <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('Vinicius Costa')
          .pauseFor(2500)
          .start()
          .deleteAll()
          .typeString('Im a Full Stack developer')
      }}
      options={{
        cursor: '',
        autoStart: true,
        loop: true
      }}
      />
    </div>
  )
}