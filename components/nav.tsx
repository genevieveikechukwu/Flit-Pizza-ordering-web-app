import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    const style = { color: "#0B6FFC", fontSize: "1.4rem"}

    return (
        <section>
            <div className="h-24 fixed top-0 left-0 w-full z-10 bg-white pl-6 pr-6 ">
                <Link href={"/"}>
                    <Image
                    src={"/images/pizza-logo_afsvzn.png"}
                    width={60}
                    height={30}
                    alt="pizza-logo"
                    className="fixed top-2"
                />

                </Link>
                <Image
                    src={"/images/pizza-header-img_krzjsl.png"}
                    width={200}
                    height={200}
                    alt="pizza-logo"
                    className="fixed left-1/4 top-0 "
                />
                <ul className="flex  mt-8 items-center  float-right font-semibold">
                    <Link href={"/"}> <li className="p-2 hover:opacity-70 hover:cursor-pointer">HOME</li> </Link> 
                    <Link href={"/products"}> <li className="p-2 hover:opacity-70 hover:cursor-pointer">PRODUCTS</li></Link> 
                    <li className="p-2 hover:opacity-70 hover:cursor-pointer">PAGES</li>
                    <li className="p-2 hover:opacity-70 hover:cursor-pointer">BLOG</li>
                    <li className="p-2 hover:opacity-70 hover:cursor-pointer">CONTACT</li>
                    <li className="p-2 hover:scale-105 hover:cursor-pointer"><IoSearch /></li>
                    <Link href={"/cart"}> <li className="p-2 hover:cursor-pointer relative"><FaCartShopping  style={style} /> <span className=" bg-red-600 h-5 w-5 rounded-full block absolute top-0 left-6 text-white text-center text-sm ">0</span> </li> </Link>
                </ul>
            </div>
        </section>
    )
}

export default Nav