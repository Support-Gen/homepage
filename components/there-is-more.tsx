import Reveal from "react-awesome-reveal";
import { fadeInBottom } from "../styles/animations";

const ThereIsMore = () => {
  return (
    <section className='container max-w-5xl mx-auto px-4 mb-40'>
      <Reveal keyframes={fadeInBottom} triggerOnce={true}>
        <h1 className="font-extrabold text-slate-900 text-6xl text-center mb-4 w-1/2 mx-auto">There is more</h1>
        <h2 className='font-medium text-center text-lg text-slate-500 mb-10'></h2>
        <div className="md:flex md:row justify-center gap-10">
          <Reveal className="md:w-1/2 mb-8" keyframes={fadeInBottom} triggerOnce={true}>
            <div className="p-10 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
              <h1 className='font-extrabold text-5xl mb-4 text-white'>Free domain</h1>
              <h2 className='font-medium text-lg text-slate-100'>We provide a free .tddocs.com subdomain for hosting your documentation site.</h2>
            </div>
          </Reveal>
          <Reveal className="md:w-1/2" keyframes={fadeInBottom} triggerOnce={true}>
            <div className="p-10 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500">
              <h1 className='font-extrabold text-5xl mb-4 text-white'>Free hosting</h1>
              <h2 className='font-medium text-lg text-slate-100'>We host your documentation site with the specified domain name.</h2>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  )
}

export default ThereIsMore;