const Footer = () => {
  return (
    <div >
      <hr />
      <footer className="text-gray-600 container mx-auto px-12 body-font" >
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              
              <span className="ml-3 text-xl">Funiro.</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              400 University Drive Suite 200 Coral Gables,
              <br/>
              FL 33134 USA
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Links
              </h2>
              <nav className="list-none cursor-pointer mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Product</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Contact</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Help
              </h2>
              <nav className="list-none cursor-pointer mb-10">
                <li>
                  <a className="text-gray-600 gap-5 hover:text-gray-800">Payment Options</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Returns</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Privacy Policies</a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Newsletter
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">

                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    placeholder='Enter Your Email Address'
                    className="underline  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black underline  py-2 px-6 focus:outline-none ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              2024 E-commerce . All rights reverved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer