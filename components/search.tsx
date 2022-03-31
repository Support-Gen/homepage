import Reveal from "react-awesome-reveal";
import { fadeInBottom } from "../styles/animations";

const Search = () => {
  return (
    <section className='container mx-auto px-4 mb-60 relative' style={{ minHeight: '1000px'}}>
      <Reveal keyframes={fadeInBottom} triggerOnce={true}>
        <div className="flex flex-col md:flex-row gap-14 mb-40">
          <div className='flex-col w-4/5 pt-10'>
            <h1 className='font-bold text-5xl mb-4 text-slate-900'>Smart search</h1>
            <h2 className='font-normal text-lg text-slate-500 mb-14'>Our optimized search algorithm finds guides by quering keywords and a dictionary of related synonyms.</h2>
          </div>
          <div className="flex-col">
            <img className="rounded-xl shadow-lg" src="/docs-home.png"></img>
          </div>
        </div>
      </Reveal>
      <Reveal keyframes={fadeInBottom} triggerOnce={true}>
        <div className="flex flex-col md:flex-row gap-14">
          <div className='flex-col'>
            <img className="rounded-xl shadow-lg" src="/docs-home.png"></img>
          </div>
          <div className="flex-col w-4/5 pt-10">
            <h1 className='font-bold text-5xl mb-4 text-slate-900'>Search integration</h1>
            <h2 className='font-normal text-lg text-slate-500 mb-14'>Integrade our search into your application, by working with our API.</h2>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Search;