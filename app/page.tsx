'use client'
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Hero from "./home/page";
import Head from 'next/head';

export const config: Metadata = {
  title: "Native Spices",
  description: "Native Spices is a platform that connects you to the best spices in Nigeria",
};

export default function Home() {
  return(
    <>
     <Head>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
    <Navbar/>
    <Hero/>

    </>
    
  )
}
