import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/img1.png'
import img6 from '../assets/img6.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import img13 from '../assets/img13.png'
import img14 from '../assets/img14.png'
import img15 from '../assets/img15.png'
import img16 from '../assets/img16.png'
import img17 from '../assets/img17.png'
import img18 from '../assets/img18.png'
import img19 from '../assets/img19.png'
import img20 from '../assets/img20.png'
import img21 from '../assets/img21.png'
import img22 from '../assets/img22.png'

function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (

    <div className='container mx-auto '>
      <section className="text-gray-600 pt-10  body-font relative" data-aos="fade-up"  data-aos-duration="3000">
        <div className="absolute  inset-0 bg-white">
          <img className=' container h-full w-full mx-auto' src={img1} alt="" />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 cartTotal p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              New Arrival
            </h2>
            <h2 className=" text-4xl text mb-1 font-medium title-font">
              Discover Our
              <br />
              New Collection
            </h2>

            <p className="leading-relaxed mb-5 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam similique ut ipsum atque neque qui mattis.
            </p>

            <Link to={'shop'} className="text-white text-center justify-center items-center button border p-4  text-lg">
              Buy Now
            </Link>

          </div>
        </div>
      </section>

      <section className="text-gray-600 container mx-auto px-20 body-font" data-aos="fade-down"  data-aos-duration="3000">
        <div className="container px-5 py-24 mx-auto">
          <h1 className='text-center text-black text-3xl font-medium '>Browse The Range</h1>
          <p className='text-center mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-80 sm:h-60 md:h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src={img6}
                  alt="blog"
                />
              </div>
              <h1 className="text-center text-black font-bold text-2xl p-5">Dining</h1>
            </div>


            <div className="p-4 md:w-1/3 w-full">
              <div className="h-80 sm:h-60 md:h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src={img5}
                />
              </div>
              <h1 className="text-center text-black font-bold text-2xl p-5">Living</h1>
            </div>


            <div className="p-4 md:w-1/3 w-full">
              <div className="h-80 sm:h-60 md:h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src={img4}
                />
              </div>
              <h1 className="text-center text-black font-bold text-2xl p-5">Bedroom</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 container mx-auto px-20 body-font " data-aos="zoom-in-up" data-aos-duration="3000">
        <div className="container px-5 py-24 mx-auto">
          <h1 className='font-bold text-3xl text-black text-center pb-10'>Our Product</h1>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src={img7}
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn'>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src={img8}
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Leviosa</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src={img9}
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Lolito</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Luxury big sofa</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 7.000.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src={img10}
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src={img11}
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src={img12}
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn'>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src={img13}
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src={img14}
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button className='text-black mt-5 border more p-2  px-14 text text-center '>Show More</button>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="img"  data-aos="zoom-in-up" data-aos-duration="3000">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-black">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                50+ Beautiful rooms
                <br />
                inspiration
              </h2>
              <p className="mb-4 text-black font-normal">
                Our designer already made a lot of beautiful
                <br />
                prototipe of rooms that inspire you
              </p>
              <button className='border button text-white p-3 mx-2 px-10'>Explore More</button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src={img15}
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src={img16}
                alt="office content 2"
              />
            </div>
          </div>
        </section>

      </div>

      <div className="container">
        <section className="text-gray-600 body-font"  data-aos="zoom-in-up" data-aos-duration="3000">
          <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col justify-center items-center">
            <p className="text-center font-normal text-black">Share your setup with</p>
            <h1 className="text-center text-black font-bold text-3xl">#FuniroFurniture</h1>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={img17}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={img18}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={img19}
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={img20}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={img21}
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={img22}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    </div>
  )
}

export default Home;