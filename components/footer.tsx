import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Button from "./button";

const Footer = () => {
    return (
        <footer className=" bg-[#FFFAEE] w-full px-5 pt-16 pb-10">
            <div className="grid grid-cols-4 gap-x-5 my-5 text-xl font-bold">
                <p className="">INFORMATION</p>
                <p className="">TOP ITEMS</p>
                <p className="">OTHERS</p>
                <p className="">SOCIAL MEDIA</p>
            </div>
            <div className="grid grid-cols-4 gap-x-5 text-[#BAB8AB] items-center text-base font-bold">
                <p className="">Home</p>
                <p className="">Pepperoni</p>
                <p className="">Checkout</p>
                <p className="flex gap-x-2 text-4xl items-center font-extrabold">
                    < FaFacebookF style={{ color: "white", backgroundColor: "#3D55A1", padding: "5px" }} />
                    < FaPinterestP style={{ color: "white", backgroundColor: "#C32930", padding: "5px" }} />
                    < FaTwitter style={{ color: "white", backgroundColor: "#24B0E4", padding: "5px" }} />
                    < FaInstagram style={{ color: "white", backgroundColor: "#C32930", padding: "5px" }} /> </p>
            </div>
            <div className="grid grid-cols-4 gap-x-5 my-5 text-[#BAB8AB] items-center text-base font-bold">
                <p className="">Blog</p>
                <p className="">Swiss Mushroom</p>
                <p className="">Cart</p>
                <p className=" text-black font-normal ">Signup and get exclusive offers and coupon codes </p>
            </div>
            <div className="grid grid-cols-4 gap-x-5 mb-5  text-[#BAB8AB] items-center text-base font-bold">
                <p className="">About us</p>
                <p className="">Barbecue Chicken</p>
                <p className="">Product</p>
                <p className=""></p>
            </div>
            <div className="grid grid-cols-4 gap-x-5 text-[#BAB8AB] items-center text-base font-bold">
                <p className="">Menu</p>
                <p className="">Vegeteran</p>
                <p className="">Locations</p>
                <p className=" w-fit"> <Button text="SIGN UP" />  </p>
            </div>
            <div className="grid grid-cols-4 gap-x-5 mt-5 text-[#BAB8AB] items-center text-base font-bold" >
                <p className=""> Contact Us</p>
                <p className="">Ham & Cheese</p>
                <p className="">Legal</p>
                <p className=""></p>
            </div>
        </footer>
    )
}

export default Footer