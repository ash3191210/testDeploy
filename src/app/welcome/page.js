import Image from "next/image"
const Welcome= async()=>{
   return (
      <>
        <h1
          className=" bg-black
          text-green-500 text-3xl 
           p-6 font-bold
           my-0.5 text-center"
        >WELCOME USER !!!</h1>

      <div className="justify-center">
      <Image
      src="imageWelcome.svg"
      width={300}
      height={300}
      className="mt-10"
      alt="Picture of the author"
    />
      </div>
      </>
   )
}

export default Welcome