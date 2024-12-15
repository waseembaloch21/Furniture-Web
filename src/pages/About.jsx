import React from 'react'
import img26 from '../assets/img26.jpg'
import img27 from '../assets/img27.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img14 from '../assets/img14.png'
import img13 from '../assets/img13.png'
function About() {
  return (
    <div className='mt-24'>
      <div className='h-20 text-center items-center  w-full flex gap-5 cartTotal'>
        <h1 className='ml-20'>Home</h1>
        <span className='text-3xl'> › </span>
        <h1 className=''>Shop</h1>
        <span className='text-3xl'> › </span>
        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
          <h1 className='text-black'>Asgard Sofa</h1>
        </span>
      </div>
      <section className="text-gray-600 body-font overflow-hidden" >
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover border cart1 object-center rounded"
              src={img26}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-black font-bold font-serif text-3xl title-font mb-1">
                Asgaard sofa
              </h1>
              <span className="title-font font-serif font-medium text-2xl text-gray-900">
                Rs. 250,000.00
              </span>
              <div className="flex mb-4">
                <span className="flex items-center">

                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-orange-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-orange-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-orange-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-orange-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-orange-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <span className="text-gray-600 ml-3 font-serif">
                    5 Customer Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed text-black font-bold font-serif">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </p>

              <div className='mt-8'>
                <span className="mr-3 ">Size</span>
              </div>
              <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <button className='border-1 border-black bg-amber-500 ml-1  w-6 h-6 '>L</button>
                  <button className='border-1 border-black cartTotal ml-1  w-6 h-6 '>XL</button>
                  <button className='border-1 border-black cartTotal ml-1  w-6 h-6 '>XS</button>
                </div>
              </div>

              <div className='mt-8'>
                <span className="mr-3 ">Color</span>
              </div>
              <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 bg-amber-600 rounded-full w-6 h-6 focus:outline-none" />
                </div>
              </div>

              <div className="flex">
                <div className="flex border border-black items-center">
                  <button className="ml-1 text-black bg-white  py-2 px-3 rounded" >
                    -
                  </button>
                  <h1 className='text-black'>1</h1>
                  <button className="ml-1 text-black bg-white  py-2 px-3 rounded">
                    +
                  </button>
                </div>
                <button
                  className='flex ml-auto font-serif text-black border border-black py-2 px-6 rounded'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <div>
        <section className="text-gray-600 body-font" >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex gap-10 mb-10 justify-center items-center">
              <h2 className="text-2xl font-medium text-gray-900 text-center">
                Description
              </h2>
              <p className="text-center text-gray-400">Additional Information</p>
              <p className="text-center text-gray-400">Reviews [5]</p>
            </div>
            <div className="items-center justify-center mx-40">
              <p className="mb-7 text-gray-400">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </p>
              <p className="text-gray-400 mb-8">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
            <div className="flex flex-wrap justify-center ml-10 mr-10 text-center">
              <div className="sm:w-1/2 mb-1 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover cartTotal object-center h-full w-full"
                    src={img27}
                  />
                </div>
              </div>
              <div className="sm:w-1/2 mb-1 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover cartTotal object-center h-full w-full"
                    src={img27}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr />
      </div>


      <div>
        <section className="text-gray-600 body-font mr-10 ml-10 ">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-center font-bold text-3xl mb-5 text-black">Related Products</h1>
            <div className="flex flex-wrap -m-4 ">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={img7}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={img8}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                  <p className="mt-1">$21.15</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={img14}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                  <p className="mt-1">$12.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={img13}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                  <p className="mt-1">$18.40</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button className="btn total border h-10 w-48 border-1 flex text-center justify-center items-center">
                Show More
              </button>
            </div>
          </div>
        </section>
      </div>




    </div>
  )
}

export default About