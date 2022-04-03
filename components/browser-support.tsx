import Reveal from "react-awesome-reveal";
import { fadeInBottom } from "../styles/animations";

const BrowserSupport = () => {
  return (
    <section className='container mx-auto px-4 mb-40'>
      <Reveal keyframes={fadeInBottom} triggerOnce={true}>
        <h1 className="font-extrabold text-6xl text-center text-slate-900 mb-4 w-1/2 mx-auto">Browser support</h1>
        <h2 className='font-medium text-lg text-center text-slate-500 mb-14'>Compatible with the newest browsers.</h2>
        <div className="flex row gap-5 justify-center">
          <img className="w-16 md:w-20" src="chrome.svg"></img>
          <img className="w-16 md:w-20" src="firefox.svg"></img>
          <img className="w-16 md:w-20" src="edge.svg"></img>
          <img className="w-16 md:w-20" src="safari.svg"></img>
          <img className="w-16 md:w-20" src="opera.svg"></img>
        </div>
      </Reveal>
    </section>
  )
}

export default BrowserSupport;