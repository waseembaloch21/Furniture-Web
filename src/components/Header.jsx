import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import img2 from '../assets/img2.png'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  console.log("user is logged in==>", user);

  const handleLogoutUser = async () => {
    await signOut(auth);
  }

  return (

    <Link>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={img2}
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Funiro
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to={'signin'} className="focus:outline-none font-serif text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
               Log in
             </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'
              } w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link to={"/"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
              <Link to={'shop'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shop</Link>
              <Link to={'about'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
              <Link to={'contactUs'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact us</Link>
            </ul>
          </div>
        </div>
      </nav>
    </Link>

    // <Link>
    //   <header className="body-font container mx-auto px-20">
    //     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //       <img src={img2} alt=""
    //         className='inline-block m-2 h-10 w-10' />
    //       <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    //         <span className="ml-3 text-2xl font-serif text-black">Funiro</span>
    //       </a>

    //       <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    //         <Link to={"/"} className="mr-5 cursor-pointer  text-black font-bold font-serif hover:text-gray-900">Home</Link>
    //         <Link to={'shop'} className="mr-5 cursor-pointer  text-black font-bold font-serif hover:text-gray-900">Shop</Link>
    //         <Link to={'about'} className="mr-5 cursor-pointer  text-black font-bold font-serif hover:text-gray-900">About</Link>
    //         <Link to={'contactUs'} className="mr-5 cursor-pointer  text-black font-bold font-serif hover:text-gray-900">Contact us</Link>
    //       </nav>

    //         <div className='flex gap-9'>

    //         <Link to={'blog'} className="  text-2xl  font-serif text-black">
    //         <CiUser />
    //       </Link>
    //         <Link to={'checkOut'}  className="  text-2xl  font-serif text-black">
    //         <CiSearch />
    //       </Link>

    //       <Link to={'productComparison'}  className="  text-2xl  font-serif text-black">
    //       <GoHeart />
    //       </Link>

    //       <Link to={'cart'} className="text-2xl font-serif text-black">
    //       <IoCartOutline />
    //       </Link>
    //         </div>

    //       {user?.isLogin ? (
    //         <img src={user?.userInfo?.photoURL} alt="" className='inline-block m-2 h-10 w-10 rounded-full ring-2 ring-white' />
    //       ) : (
    //         <Link to={'signup'} className="focus:outline-none  font-serif text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
    //           Sign Up
    //         </Link>
    //       )}

    //       {user.isLogin ? (
    //         <button onClick={handleLogoutUser} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium font-serif rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
    //       ) : (
    //         <Link to={'signin'} className="focus:outline-none font-serif text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
    //           Log in
    //         </Link>
    //       )}
    //     </div>
    //   </header>
    // </Link>

  )
}

export default Header;