import { AiFillCode } from 'react-icons/ai';
import { MdAutoAwesome } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

const HowItWorks = () => {
  return (
    <section className='container w-full mb-20'>
      <h1 className="font-bold text-4xl mb-4">How it works</h1>
      <p className='mb-4'>3 steps to success</p>
      <div className="grid grid-cols-3 py-14 h-96 w-full flex justify-center">
        <div className="flex flex-row">
          <h2 className='font-extrabold text-8xl mr-10'>1</h2>
          <div className='pt-4'>
            <h2 className='font-bold text-3xl mb-2'>Add descriptions</h2>
            <p className='font-medium text-xl text-slate-700'>Codeeee</p>
          </div>
        </div>
        <div className="flex flex-row">
          <h2 className='font-extrabold text-8xl mr-10'>2</h2>
          <div className='pt-4'>
            <h2 className='font-bold text-3xl mb-2'>Setup site</h2>
            <p className='font-medium text-xl text-slate-700'>Codeeee</p>
          </div>
        </div>
        <div className="flex flex-row">
          <h2 className='font-extrabold text-8xl mr-10'>3</h2>
          <div className='pt-4'>
            <h2 className='font-bold text-3xl mb-2'>Generate guide</h2>
            <p className='font-medium text-xl text-slate-700'>Codeeee</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default HowItWorks;