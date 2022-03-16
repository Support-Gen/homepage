const Hero = () => {
  return (
    <section className='container px-4 flex flex-row'>
      <div className='w-2/5 mt-20 md:mt-40 relative'>
        <h1 className='font-bold text-5xl mb-16 text-slate-900'>Good <span className='font-bold text-blue-600'>product guides</span><br></br> less customer support<br></br> more time   <span className='font-extrabold underline decoration-wavy decoration-green-500'>more money</span></h1>
        <h2 className='font-normal text-lg text-slate-500 mb-14'>tbddocs enables easy product guide generation for your Saas or web application.</h2>
        <div className='flex flex-row gap-2'>
          <input className="shadow appearance-none border rounded-l-lg w-2/4 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Type in email"></input>
          <button className='w-1/3 bg-blue-600 rounded-r-lg text-white font-semibold hover:bg-blue-500 shadow-lg shadow-blue-500/50'>Notify on launch 🚀</button>
        </div>
        <img className='absolute' width={'124px'} style={{left: '420px', top: '-40px'}} src="/arrow-1.svg" alt="Arrow"/>
        {/* <img className='absolute' width={'92px'} style={{left: '-80px', top: '100px'}} src="/arrow-2.svg" alt="Arrow"/> */}
        <img className='absolute' width={'164px'} style={{left: '140px', top: '160px'}} src="/arrow-3.svg" alt="Arrow"/>
      </div>
      <img className='w-1/2 absolute -right-4 top-36 shadow-lg rounded-lg' width={'100%'} height={'500px'} src="/feature-docs.png" alt="Image of feature documentation"/>
    </section>
  )
}

export default Hero;