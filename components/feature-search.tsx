const FeatureSearch = () => {
  return (
    <section className='container px-4 flex flex-col md:flex-row gap-5'>
      <div className='w-3/5 flex-col pt-20'>
        <h1 className='font-bold text-5xl mb-8 text-slate-900'>Smart search</h1>
        <h2 className='font-normal text-lg text-slate-500 mb-14'>Let your documentation answer their questions 😉. Our optimized search algorithm matches potential answers by quering keywords and related synonyms.</h2>
      </div>
      <div className="flex-col">
        <img className="shadow-lg rounded-lg mt-10" src="/docs-home.png"></img>
      </div>
    </section>
  )
}

export default FeatureSearch;