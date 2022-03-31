import Reveal from "react-awesome-reveal";
import { fadeInBottom } from "../styles/animations";

const Hero = () => {
  return (
    <section className='mx-10 bg-gradient-to-r from-sky-100 to-violet-100 rounded-2xl w-full'>
      <Reveal keyframes={fadeInBottom} triggerOnce={true}>
        <div className='mt-20 md:mt-40 relative text-center'>
          <h1 className='font-bold text-7xl mb-10 text-slate-900'>Product docs <br></br>that <span className='font-extrabold underline decoration-wavy decoration-blue-500'>save you time</span></h1>
          <h2 className='font-normal text-lg text-slate-500 mb-14 w-1/3 mx-auto'>We generate a documentation site out of your web-app, that makes your customer&apos;s and your life easier.</h2>
        </div>
        <div className='flex flex-row gap-2 mb-20 mx-auto w-1/3'>
          <input className="shadow appearance-none border rounded-l-lg w-1/2 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Type in email"></input>
          <button className='w-1/2 bg-blue-600 rounded-r-lg text-white font-semibold hover:bg-blue-500 shadow-lg shadow-blue-500/50'>Notify on launch 🚀</button>
        </div>
        {/* <img className='w-4/5 mx-auto shadow-lg rounded-2xl' style={{zIndex: -1}} width={'100%'} height={'500px'} src="/feature-docs.png" alt="Image of feature documentation"/> */}
      </Reveal>
    </section>
  )
}

export default Hero;