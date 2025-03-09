'use client'
import { Metadata } from "next";
import Image from "next/image";
import Hero from "./home/page";

export const config: Metadata = {
  title: "Native Spices",
  description: "Native Spices is a platform that connects you to the best spices in Nigeria",
};

export default function Home() {
  return(
    <>
    <Hero/>

    </>
    
  )
}
