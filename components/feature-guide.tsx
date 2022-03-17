const FeatureGuide = () => {
  return (
    <section className='container px-4 flex flex-col md:flex-row gap-5'>
      <div className='flex-col w-3/5 pt-20'>
        <h1 className='font-bold text-5xl mb-8 text-slate-900'>Easy guides</h1>
        <h2 className='font-normal text-lg text-slate-500 mb-14'>Follow easy step-by-step guides with visual feedback. The guides are optimized for mobile and pc views.</h2>
      </div>
      <div className="flex-col">
        <img className="shadow-lg rounded-lg mt-10" src="/feature-guide.png"></img>
      </div>
    </section>
  )
}

export default FeatureGuide;