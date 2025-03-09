'use client'
import Image from "next/image"
import giImage from '@/components/images/gi.png';
import turmeric from '@/components/images/Turmeric.jpeg';
import blackpeper from '@/components/images/blackpepper.jpeg';
import card from '@/components/images/card.jpg';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";




const Home = () =>{

  const [result, setResult] = useState("");

  interface CheckAnswerProps {
    option: string;
  }

  function checkAnswer({ option }: CheckAnswerProps) {
    if (option === "b") {
      setResult("Correct! Black Pepper is the 'King of Spices'.");
    } else {
      setResult("Oops! Try again.");
    }
  }

    return(
<div>
  <Navbar/>
  <section>
    <div className="relative mt-[64] lg:mt-[76]">
      <Image src={giImage} alt="bgimage" className=" lg:w-[1600] lg:h-[600] w-[1000] h-[300] opacity-90"/>
      <div className="absolute inset-0 r flex flex-col justify-center items-center text-white">
        <h1 className="lg:text-9xl text-4xl text-center font-bold">
        ORGANIC SPICES
        </h1>
        <p className="lg:text-xl text-center font-bold px-4">
          "Each spice in Indian cuisine brings its own story to the dish"
        </p>
        <div className="flex mt-4">
          <input type="text" name="spice" className="bg-white text-black px-3 lg:py-2 border-2 border-white focus:border-green-500 outline-0 lg:w-98 w-50 rounded-l-sm" placeholder="Search" />
          <button className="bg-green-700 rounded-r-sm p-2">Search</button>
        </div>
      </div>
    </div>
    </section>



        <section>
      <div className="p-5 lg:mb-10 ">
        <h1 className="flex justify-center lg:p-10 p-5 lg:text-4xl text-3xl font-semibold mb-5">Explore Our Spices</h1>
        <div className="flex flex-col lg:flex-row gap-2 justify-around items-center gap-y-5 mb-10">

            <div className="w-70 h-50 border-black bg-black rounded-3xl mb-32">
                <Image src={turmeric} alt="" className="w-full h-full rounded rounded-t-3xl"/>
                <div className="w-full h-32 bg-black p-2 text-white  rounded-b-3xl">
                    <h1 className="text-2xl font-bold">Turmeric</h1>
                    <p className="">Known as the golden spice, turmeric has powerful anti-inflammatory properties.</p>
                </div>
            </div>
            <div className="w-70 h-50 border-black bg-black rounded-3xl mb-32">
                <Image src={blackpeper} alt="" className="w-full h-full rounded rounded-t-3xl"/>
                <div className="w-full h-32 bg-black p-2 text-white  rounded-b-3xl">
                    <h1 className="text-2xl font-bold">Black Pepper</h1>
                    <p className="">Used in both sweet and savory dishes, cardamom is called the "Queen of Spices.</p>
                </div>
            </div>
            <div className="w-70 h-50 border-black bg-black rounded-3xl mb-32">
                <Image src={card} alt="" className="w-full h-full rounded rounded-t-3xl"/>
                <div className="w-full h-32 bg-black p-2 text-white  rounded-b-3xl">
                    <h1 className="text-2xl font-bold">Cardamom</h1>
                    <p className="">Once called "Black Gold," this spice was a key driver of the spice trade.</p>
                </div>
            </div>
        </div>
      </div>
      </section>

      
      <section>
        <div className="flex flex-col text-center justify-center items-center mb-20 rounded-md m-3">
            <div className="p-5 lg:mb-10">
              <h1 className="lg:text-4xl text-3xl font-bold lg:mb-5">
                Spice Knowledge Challenge
              </h1>
            </div>
            <div className="">
              <h1  className="mb-8 lg:text-2xl text-md font-semibold px-3">Which spice was considered more valuable than gold in ancient times?</h1>
              <div className="mb-5">
                <button onClick={() => checkAnswer({ option: "a" })} className="px-3 py-2 rounded-2xl bg-black mr-4 text-white ">Turmeric</button>
                <button onClick={() => checkAnswer({ option: "b" })} className="px-3 py-2 rounded-2xl bg-black mr-4 text-white ">Black Pepper</button>
                <button onClick={() => checkAnswer({ option: "c" })} className="px-3 py-2 rounded-2xl bg-black mr-4 text-white ">Saffron</button>
              </div>
              <p className="text-xl font-semibold text-green-600">{result}</p>
            </div>
        </div>
      </section>
      <Footer/>
    </div>
    

    )
};

export default Home;