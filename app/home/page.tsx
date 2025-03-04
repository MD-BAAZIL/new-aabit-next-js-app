
import Image from "next/image"
import giImage from '@/components/images/gi.png';
import turmeric from '@/components/images/Turmeric.jpeg';
import blackpeper from '@/components/images/blackpepper.jpeg';
import card from '@/components/images/card.jpg';
import { callbackify } from "util";




const Home = () =>{
    return(
<div>
    <div className="relative mt-[64] lg:mt-[76]">
      <Image src={giImage} alt="bgimage" className=" w-[1600] h-[555] "/>
      <div className="absolute inset-0 r flex flex-col justify-center items-center text-white">
        <h1 className="text-9xl font-bold">
        ORGANIC SPICES
        </h1>
        <p className="text-xl font-bold">
        "Each spice in Indian cuisine brings its own story to the dish"
        </p>
        <div className="flex mt-4">
          <input type="text" name="spice" className="bg-white text-black px-3 py-2 w-98 rounded-l-sm" placeholder="Search" />
          <button className="bg-green-700 rounded-r-sm p-2">Search</button>
        </div>
      </div>
      </div>

      <div className="p-5 mb-32 ">
        <h1 className="flex justify-center p-10 text-4xl mb-5">Explore Our Spices</h1>
        <div className="flex gap-2 justify-around mb-10">
            <div className="w-70 h-50 border-black bg-black rounded rounded-t-3xl">
                <Image src={turmeric} alt="" className="w-full h-full rounded rounded-t-3xl"/>
                <div className="w-full h-32 bg-black p-2 text-white  rounded-b-3xl">
                    <h1 className="text-2xl font-bold">Turmeric</h1>
                    <p className="">Known as the golden spice, turmeric has powerful anti-inflammatory properties.</p>
                </div>
            </div>
            <div className="w-70 h-50 border-black bg-black rounded rounded-t-3xl">
                <Image src={blackpeper} alt="" className="w-full h-full rounded rounded-t-3xl"/>
                <div className="w-full h-32 bg-black p-2 text-white  rounded-b-3xl">
                    <h1 className="text-2xl font-bold">Black Pepper</h1>
                    <p className="">Used in both sweet and savory dishes, cardamom is called the "Queen of Spices.</p>
                </div>
            </div>
            <div className="w-70 h-50 border-black bg-black rounded rounded-t-3xl">
                <Image src={card} alt="" className="w-full h-full rounded rounded-t-3xl"/>
                <div className="w-full h-32 bg-black p-2 text-white  rounded-b-3xl">
                    <h1 className="text-2xl font-bold">Cardamom</h1>
                    <p className="">Once called "Black Gold," this spice was a key driver of the spice trade.</p>
                </div>
            </div>
        </div>
      </div>
      </div>
    

    )
};

export default Home;