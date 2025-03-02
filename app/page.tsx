import { Metadata } from "next";
import Navbar from "../components/Navbar";

export const config: Metadata = {
  title: "Native Spices",
  description: "Native Spices is a platform that connects you to the best spices in Nigeria",
};

export default function Home() {
  return(
    <div>
      <Navbar/>
    </div>
  )
}
