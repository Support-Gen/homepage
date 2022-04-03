import Reveal from "react-awesome-reveal";
import { fadeInBottom } from "../styles/animations";

const DocsExtraFeatures = () => {
  return (
    <section className="container max-w-6xl px-4 mx-auto mb-40">
      <div className="md:flex md:row gap-10">
        <div className="pt-10 md:sticky md:w-1/3" style={{ height: '300px', top: '0px'}}>
          <h1 className="font-extrabold text-7xl text-slate-900">What makes us <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">shine...</span></h1>
        </div>
        <div className="pt-10 md:w-2/3" style={{ height: '1540px'}}>
          <Reveal keyframes={fadeInBottom} triggerOnce={true}>
            <div className="shadow-lg rounded-3xl p-10 mb-20">
              <h1 className='font-extrabold text-5xl mb-4 text-slate-900'>Smart search</h1>
              <h2 className='font-medium text-lg text-slate-500'>Our optimized search algorithm finds guides by quering keywords and a dictionary of related synonyms.</h2>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInBottom} triggerOnce={true}>
            <div className="shadow-lg rounded-3xl p-10 mb-20">
              <h1 className='font-extrabold text-5xl text-slate-900 mb-4'>Custom themes</h1>
              <h2 className='font-medium text-lg text-slate-500'>Add custom themes to your documentation and match your branding</h2>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInBottom} triggerOnce={true}>
            <div className="shadow-lg rounded-3xl p-10 mb-20">
              <h1 className='font-extrabold text-5xl mb-4 text-slate-900'>Search integration</h1>
              <h2 className='font-medium text-lg text-slate-500'>Integrade our search into your application, by working with our API.</h2>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInBottom} triggerOnce={true}>
            <div className="shadow-lg rounded-3xl p-10 mb-20">
              <h1 className='font-extrabold text-5xl mb-4 text-slate-900'>Fully responsive</h1>
              <h2 className='font-medium text-lg text-slate-500'>Your generated documentation behaves fully responsive on desktop, tablet and mobile devices.</h2>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInBottom} triggerOnce={true}>
          <div className="shadow-lg rounded-3xl p-10 mb-20">
              <h1 className='font-extrabold text-5xl mb-4 text-slate-900'>Top Lighthouse scores</h1>
              <h2 className='font-medium text-lg text-slate-500'>By following markup conventions, serving next-gen image formats and reducing bundle sizes we manage to hit top SEO scores.</h2>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default DocsExtraFeatures;