import Reveal from "react-awesome-reveal";
import { fadeInBottom } from "../styles/animations";

const Themes = () => {
  return (
    <section className='container mx-auto px-4 mb-60 relative' style={{ minHeight: '200px'}}>
      <Reveal keyframes={fadeInBottom} triggerOnce={true}>
        <h1 className='font-bold text-5xl text-slate-900 mb-4'>Custom themes</h1>
        <h2 className='font-normal text-lg text-slate-500 mb-14'>Add custom themes to your documentation and match your branding</h2>
        {/* <img className="rounded-xl shadow-lg w-full" src="/feature-guide.png"></img> */}
      </Reveal>
      <img className="absolute rotate-[30deg]" style={{ top: -125, right: 300, width: '350px', zIndex: -1}}  src="/color-palette-dynamic-color.svg"></img>
      <img className="absolute" style={{ top: -50, right: 175, width: '175px', zIndex: -1}}  src="/paint-brush-dynamic-color.svg"></img>
    </section>
  )
}

export default Themes;