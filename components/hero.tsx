import Reveal from "react-awesome-reveal";
import { fadeInBottom, fadeInTop } from "../styles/animations";

const Hero = () => {
  return (
    <section className='mx-0 md:mx-10 sm:mx-5 bg-gradient-to-r from-sky-200 to-violet-200 sm:rounded-2xl w-full relative'>
      <Reveal keyframes={fadeInBottom} triggerOnce={true}>
        <div className='mt-20 md:mt-40 text-center'>
          <h1 className='font-bold text-5xl md:text-7xl text-slate-800 mb-10'>Product docs <br></br>that <span className='font-extrabold underline decoration-wavy text-slate-900 decoration-blue-500'>save you time</span></h1>
          <h2 className='font-normal text-lg px-5 text-slate-500 mb-14 lg:w-1/2 xl:w-1/3 mx-auto'>We generate a documentation site out of your web-app, that makes your customer&apos;s and your life easier.</h2>
        </div>
        <div className='flex flex-row gap-2 mb-20 px-10 mx-auto lg:w-1/2 xl:w-1/3'>
          <input className="shadow appearance-none border rounded-l-2xl w-1/2 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Type in email"></input>
          <button className='w-1/2 bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-400 hover:to-violet-400 rounded-r-2xl text-white font-semibold shadow-lg shadow-blue-500/50'>Notify on launch 🚀</button>
        </div>
      </Reveal>
      <Reveal keyframes={fadeInTop} triggerOnce={true}>
        <div className="absolute top-10 w-full px-10">
          <img className='md:w-3/5 shadow-xl rounded-3xl mx-auto' width={'100%'} height={'500px'} src="/feature-docs.png" alt="Image of feature documentation"/>
        </div>
      </Reveal>
    </section>
  )
}

export default Hero;