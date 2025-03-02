'use client'
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Image from "next/image";
import giImage from '@/components/images/gi.png';

export const config: Metadata = {
  title: "Native Spices",
  description: "Native Spices is a platform that connects you to the best spices in Nigeria",
};

export default function Home() {
  return(
    <div className="relative">
      <Navbar/>
      <Image src={giImage} alt="bgimage" className=" w-[1600] h-[800] "/>
      <div className="absolute inset-0 item-center flex flex-col justify-center items-center text-white">
        <h1 className="text-9xl font-bold">
        ORGANIC SPICES
        </h1>
        <p className="text-xl font-bold">
        "Each spice in Indian cuisine brings its own story to the dish"
        </p>
        <div className="flex mt-4">
          <input type="text" name="spice" className="bg-white text-black px-3 py-2 w-98 rounded" placeholder="Search" />
          <button className="bg-green-700 rounded-r-sm p-2">Search</button>
        </div>
      </div>
    </div>
  )
}
