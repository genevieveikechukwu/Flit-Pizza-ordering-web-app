import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";

const Nav = () => {
    const style = { color: "#0B6FFC", fontSize: "1.4rem"}

    return (
        <section>
            <div className="h-32 fixed top-0 left-0 w-full z-10 bg-white pl-6 pr-6 ">
                <Image
                    src={"/images/pizza-logo_afsvzn.png"}
                    width={90}
                    height={30}
                    alt="pizza-logo"
                    className="fixed top-2"
                />
                <Image
                    src={"/images/pizza-header-img_krzjsl.png"}
                    width={200}
                    height={200}
                    alt="pizza-logo"
                    className="fixed left-1/4 top-0 "
                />
                <ul className="flex  mt-8 items-center  float-right font-semibold">
                    <li className="p-2">HOME</li>
                    <li className="p-2">PRODUCS</li>
                    <li className="p-2">PAGES</li>
                    <li className="p-2">BLOG</li>
                    <li className="p-2">CONTACT</li>
                    <li className="p-2"><IoSearch /></li>
                    <li className="p-2 relative"><FaCartShopping  style={style} /> <span className=" bg-red-600 h-5 w-5 rounded-full block absolute top-0 left-6 text-white text-center text-sm ">0</span> </li>
                </ul>
            </div>
        </section>
    )
}

export default Nav