import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <nav className="sticky top-0 flex px-8 py-4 justify-between items-center bg-black">
        <div>
          <Link className="text-green-500 text-4xl ml-5 font-bold" href="#">NATIVE SPICES</Link>
        </div>
        <div className="flex gap-7 text-white text-lg">
            <div>
                <Link href="#">Home</Link>
            </div>
            <div>
                <Link href="#">About</Link>
            </div>
            <div>
                <Link href="#">Product</Link>
            </div>
            <div>
                <Link href="#">Contact</Link>
            </div>
        </div>
        <div>
            <Link className="mr-5 bg-green-500 rounded rounded-2xl p-3 text-lg" href="#">SIGN IN</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
