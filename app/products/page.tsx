import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import config from "./productData"
import Link from "next/link"

export default function Products() {
     return(
        <div>
            <Navbar/>
            <div className="mt-[64] lg:mt-[76]">
                <section>
                    <div className="flexflex-col justify-center items-center text-center  bg-gray-400 ">
                        <h1 className="font-bold lg:text-5xl pt-10 text-4xl  text-white">
                            OUR PRODUCTS
                        </h1>
                        <div className="flex flex-wrap justify-center lg:px-10 lg:py-10 p-5">
                            {config.products.map((Products) => (
                                <Link  key={Products.id} href={`./products/${Products.id}`} className="flex justify-around  mt-5 w-1/2 lg:w-1/4">
                                    <div  className="">
                                        <div className="bg-black h-65 w-40 lg:w-50 lg:mb-10 rounded-2xl  hover:scale-107 hover:shadow-2xl duration-300">
                                            <Image src={Products.image} alt="" className="rounded-t-2xl w-50 h-45"/>
                                            <div className="text-white">
                                                <h1 className="mt-3 font-bold">{Products.Name}</h1>
                                                <p className="font-light text-sm mt-1">{Products.des}</p>
                                                {/* <button className="bg-gray-500 hover:bg-gray-400 px-2 rounded mt-3">Add to cart</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            ))}
                            
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}