const CtaNotify = () => {
  return (
    <div className="container mx-auto mb-20 px-4">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex justify-center pt-20" style={{ height: '375px'}}>
        <div>
          <h2 className="text-white font-extrabold text-5xl mb-3">Interested in tbddocs?</h2>
          <p className="text-gray-100 text-xl mb-10">We are currently still in development. </p>
          <div className='flex flex-row gap-2'>
            <input className="shadow appearance-none border rounded-l-lg w-2/4 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Type in email"></input>
            <button className='w-2/4 bg-blue-700 rounded-r-lg text-white font-semibold hover:bg-blue-500 shadow-lg shadow-blue-500/50'>Notify on launch 🚀</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaNotify;