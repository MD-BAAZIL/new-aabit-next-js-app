'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (


    <div className=" fixed inset-x-0 top-0 z-50">
      <nav className="flex px-8 py-4 justify-between items-center bg-black">
        <div>
          <Link className="text-green-500 lg:text-4xl text-2xl lg:ml-5 font-bold" href="/">NATIVE SPICES</Link>
        </div>
        <div className="hidden lg:block text-white text-sm lg:text-lg">
          <div className="flex gap-7">
            <div className="">
                <Link className="border-green-500 hover:border-b-2" href="/">Home</Link>
            </div>
            <div className="">
                <Link className="border-green-500 hover:border-b-2" href="/about">About</Link>
            </div>
            <div className="">
                <Link className="border-green-500 hover:border-b-2" href="/products">Product</Link>
            </div>
            <div className="">
                <Link className="border-green-500 hover:border-b-2" href="/contact">Contact</Link>
            </div>
            
            </div>
            
        </div>
        <div>
            <Link className="mr-5 bg-green-500 rounded-2xl p-3 text-lg hidden lg:block hover:bg-green-400 hover:text-white duration-200" href="#">SIGN IN</Link>
        </div>
        <button className="text-white lg:hidden"
          onClick={toggleMenu}
          >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor" 
            className={`size-6 transition-transform duration-500 ease-in-out ${isMenuOpen? "roatate-180": "rotate-0"}`}>
  
          {!isMenuOpen ?(
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
               
          ):(
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            
          )}
          
        </svg>

        </button>
        </nav>


        <div className={`transforme transition-transform duration-500 ease-in-out
          ${isMenuOpen? "translate-x-full": "translate-x-0"}`}>
        <div className="lg:hidden fixed  right-0 w-[150] bg-black text-center h-screen text-white text-sm :text-lg">
          <div className="">
          <div className="p-3 text-lg">
                <Link className="border-green-500 hover:border-b-2" href="/">Home</Link>
            </div>
            <div className="p-3 text-lg">
                <Link className="border-green-500 hover:border-b-2" href="/about">About</Link>
            </div>
            <div className="p-3 text-lg">
                <Link className="border-green-500 hover:border-b-2" href="/products">Product</Link>
            </div>
            <div className="p-3 text-lg">
                <Link className="border-green-500 hover:border-b-2" href="/">Contact</Link>
            </div>
          </div>
          <div className="p-3 text-lg">
            <Link className=" bg-green-500 rounded-2xl py-1 px-2 " href="#">SIGN IN</Link>
        </div>
            
        </div>
        <div>
            <Link className="mr-5 bg-green-500 rounded-2xl p-3 text-lg hidden " href="#">SIGN IN</Link>
        </div>
        </div>
      
    </div>
  );
}

export default Navbar;
