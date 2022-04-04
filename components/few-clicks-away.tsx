import Reveal from "react-awesome-reveal";
import { fadeInBottom } from "../styles/animations";

const OneClickGeneration = () => {
  return (
    <section className='container mx-auto px-4 mb-40'>
      <Reveal keyframes={fadeInBottom} triggerOnce={true}>
        <h1 className="font-extrabold text-slate-900 text-6xl text-center mb-4 w-1/2 mx-auto">All that<br></br>only a few <br></br> clicks away.</h1>
        <h2 className='font-medium text-lg text-center text-slate-500 mb-14'>Generate your documentation with one click.</h2>
      </Reveal>
    </section>
  )
}

export default OneClickGeneration;