const Hero = () => {
  return (
    <section className='container mx-auto px-4 flex flex-row relative'>
      <div className='w-2/5 mt-20 md:mt-40 relative'>
        <h1 className='font-bold text-6xl mb-10 text-slate-900'>Product docs that <br></br><span className='font-extrabold underline decoration-wavy decoration-blue-500'>save you time</span></h1>
        <h2 className='font-normal text-lg text-slate-500 mb-14'>We generate a documentation site out of your web-app, that makes your customer&apos;s and your life easier.</h2>
        <div className='flex flex-row gap-2'>
          <input className="shadow appearance-none border rounded-l-lg w-2/4 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Type in email"></input>
          <button className='w-1/3 bg-blue-600 rounded-r-lg text-white font-semibold hover:bg-blue-500 shadow-lg shadow-blue-500/50'>Notify on launch 🚀</button>
        </div>
      </div>
      <img className='w-1/2 absolute -right-4 top-36 shadow-lg rounded-2xl' width={'100%'} height={'500px'} src="/feature-docs.png" alt="Image of feature documentation"/>
      <img className="absolute" style={{ top: 650, left: -150, width: '175px', zIndex: -1}}  src="/clock-dynamic-color.svg"></img>
    </section>
  )
}

export default Hero;