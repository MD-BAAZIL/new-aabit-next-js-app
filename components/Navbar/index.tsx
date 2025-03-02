import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex px-6 py-4 justify-around items-center">
        <div>
          <Link className="text-green-500 text-2xl" href="#">NATIVE SPICES</Link>
        </div>
        <div className="flex">
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
            <Link href="#">Sign IN</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
