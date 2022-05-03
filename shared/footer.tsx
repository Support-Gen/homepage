const Footer = () => {
  return (
    <footer className="container max-w-6xl mx-auto px-4 py-10">
      <hr className="mb-10"></hr>
      <div className="grid grid-cols-4 mb-10">
        <div>
          <p className="font-bold mb-3">tbdDocs</p>
          <a><p className="font-medium text-slate-600">Product</p></a>
          <a><p className="font-medium text-slate-600">How it works</p></a>
        </div>
        <div>
          <p className="font-bold mb-3">Resources</p>
          <a><p className="font-medium text-slate-600">Documentation</p></a>
          <a><p className="font-medium text-slate-600">FAQ</p></a>
        </div>
        <div>
          <p className="font-bold mb-3">Legal</p>
          <a><p className="font-medium text-slate-600">How it works</p></a>
        </div>
        <div>
          <p className="font-bold mb-3">Support</p>
          <a><p className="font-medium text-slate-600">How it works</p></a>
        </div>
      </div>
      <hr className="mb-10"></hr>
      <div className="flex flex-row justify-between">
        <p className="font-medium text-slate-500 font-md">Copyright &copy; flowydocs 2022</p>
        <a><p className="font-medium text-slate-500 font-md">Cookies</p></a>
      </div>
    </footer>
  )
}

export default Footer;
