"use client"; 
import { useParams } from "next/navigation";
import config from "../productData"; 
import Image from "next/image";
import Link from "next/link";

const Addcart = () => {
    const params = useParams();
    const id = params?.id; // Get id from dynamic route


    const addcart = config.products.find((item) => item.id === id);
    const remainingProducts = config.products.filter((item) => item.id !== id);


    if (!addcart) {
        return <div className="text-center text-2xl font-bold p-10">Page Not Found</div>;
    }

    return (
        <div>
            hi every one
        </div>
    );
};

export default Addcart;
