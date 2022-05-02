import Reveal from "react-awesome-reveal";
import { fadeInBottom, fadeInTop } from "../styles/animations";

const Hero = () => {
  return (
    <section className='mx-0 md:mx-10 sm:mx-5 bg-indigo-100 sm:rounded-2xl w-full relative mt-4'>
      <Reveal keyframes={fadeInBottom} triggerOnce={true}>
        <div className='mt-24 text-center'>
          <h1 className='font-bold text-5xl md:text-7xl text-slate-900 mb-10'>Product docs <br></br>that <span className='font-extrabold underline decoration-wavy text-violet-500'>save you time</span></h1>
          <h2 className='font-medium text-lg px-5 text-slate-800 mb-14 lg:w-1/2 xl:w-2/5 mx-auto'>We generate a documentation out of your web-app, that makes your customer&apos;s and your life easier.</h2>
          <button className="text-lg font-bold bg-violet-600 hover:bg-violet-500 text-white rounded-2xl px-10 py-3 mb-2">Start generating docs</button>
          <p className="font-normal">21 days money back</p>
        </div>
      </Reveal>
      <Reveal keyframes={fadeInTop} triggerOnce={true}>
        <div className="absolute top-10 w-full px-10">
          <img className='md:w-4/5 shadow-xl rounded-3xl mx-auto' width={'100%'} height={'500px'} src="/feature-docs.png" alt="Image of feature documentation"/>
        </div>
      </Reveal>
    </section>
  )
}

export default Hero;