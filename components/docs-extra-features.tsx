import Reveal from "react-awesome-reveal";
import { fadeInBottom } from "../styles/animations";

const DocsExtraFeatures = () => {
  return (
    <section className="container px-4 mx-auto mb-20">
      <div className="flex row">
        <div className="pt-10 sticky w-1/2" style={{ height: '900px', top: '0px'}}>
          <h1 className="font-extrabold text-7xl">There is more...</h1>
        </div>
        <div className="pt-10" style={{ height: '1700px'}}>
          <Reveal keyframes={fadeInBottom} triggerOnce={true}>
            <div>
              <h1 className='font-bold text-5xl mb-4 text-slate-900'>Smart search</h1>
              <h2 className='font-normal text-lg text-slate-500 mb-14'>Our optimized search algorithm finds guides by quering keywords and a dictionary of related synonyms.</h2>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-slate-900 mb-4'>Custom themes</h1>
              <h2 className='font-normal text-lg text-slate-500 mb-14'>Add custom themes to your documentation and match your branding</h2>
            </div>
            <div>
              <h1 className='font-bold text-5xl mb-4 text-slate-900'>Search integration</h1>
              <h2 className='font-normal text-lg text-slate-500 mb-14'>Integrade our search into your application, by working with our API.</h2>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default DocsExtraFeatures;