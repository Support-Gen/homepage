const CtaNotify = () => {
  return (
    <div className="max-w-6xl mx-auto mb-20 md:px-4">
      <div className="bg-gradient-to-r from-sky-500 to-violet-500 to-purple-500 md:rounded-3xl flex justify-center pt-20 px-4" style={{ height: '375px'}}>
        <div className="">
          <h2 className="text-white font-extrabold text-5xl mb-2">Interested in tbddocs?</h2>
          <p className="text-gray-200 text-xl mb-10">We are still in development. </p>
          <div className='flex flex-row gap-2'>
            <input className="shadow appearance-none border rounded-l-lg w-2/4 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Type in email"></input>
            <button className='w-2/4 bg-slate-800 hover:bg-slate-700 rounded-r-2xl text-white font-semibold shadow-lg shadow-slate-500/50'>Notify on launch 🚀</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaNotify;