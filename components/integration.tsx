import Reveal from "react-awesome-reveal";
import { fadeInBottom } from "../styles/animations";

const Integration = () => {
  return (
    <section className='container mx-auto px-4 mb-60 relative' style={{ minHeight: '200px'}}>
      <Reveal keyframes={fadeInBottom} triggerOnce={true}>
        <h1 className='font-bold text-5xl mb-4 text-slate-900'>Integration</h1>
        <h2 className='font-normal text-lg text-slate-500'>Integrate our documentation services through by using html attributes. No library needed.</h2>
        <button>View documentation guide</button>
      </Reveal>
    </section>
  )
}

export default Integration;