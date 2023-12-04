"use client"
import { useState,useContext } from "react"
import SettingsContext from "@/utils/context/settingsControls"
import Button from "@/components/button"
import Image from "next/image"
import { MdOutlinePhonelinkRing } from "react-icons/md"
import { LuPackageCheck } from "react-icons/lu";
import GreenCheck from "@/components/greencheck"
import Modal from "@/components/modal/modal"


const Cart = () => {
    const [displaybtns, setDisplayBtns] = useState(false)
    const [paid, setPaid] = useState(false)
    const {setShowModal } = useContext(SettingsContext)
    const content = (
        <div className="w-full m-auto">
            <h1 className="text-xl font-semibold mb-5">You will Pay $12 on delivery</h1>
            <form action="" className="w-full flex-col ">
                <p>Name Surname</p>
                <input type="email" placeholder="John Doe" className=" w-full border border-gray-600 p-2 rounded" />
                <p>Phone Number</p>
                <input type="text" placeholder="+234 912 355 087 56" className=" w-full border border-gray-600 p-2 rounded my-5" />
                <p>Address</p>
                <textarea cols={5} rows={5} className="  w-full border border-gray-600 p-2  rounded text-white" />

            </form>
            <p className="bg-[#F9B304] p-1 text-xl border border-gray-800 hover:bg-green-600 hover:text-white text-center w-1/4 rounded-lg shadow-2xl hover:cursor-pointer m-auto">Order</p>
        </div>
    )
    return (
        <section className='mt-24 pl-5 flex pb-5'>
            <div className="w-[71%]">
                <Modal content={content} />
                {
                    !paid && (
                        <>
                            <div className="grid grid-cols-6 gap-x-5 font-semibold text-lg pb-5 border-b">
                                <p>Product</p>
                                <p>Name</p>
                                <p>Extra</p>
                                <p>Price</p>
                                <p>Quantity</p>
                                <p>Total</p>
                            </div>

                            <div className="grid grid-cols-6 gap-x-5 border-b border-gray-300 items-center">
                                <div>

                                    <Image
                                        src={"/images/sandwich.jpg"}
                                        height={100}
                                        width={100}
                                        alt="pizza"

                                    />
                                </div>
                                <p>Burger Pizza</p>
                                <p>Cheese</p>
                                <p>$20</p>
                                <p>2</p>
                                <p>$40</p>
                            </div>
                            <div className="grid grid-cols-6 gap-x-5 border-b border-gray-300 items-center ">
                                <div>

                                    <Image
                                        src={"/images/sandwich.jpg"}
                                        height={100}
                                        width={100}
                                        alt="pizza"

                                    />
                                </div>
                                <p>Burger Pizza</p>
                                <p>Cheese</p>
                                <p>$20</p>
                                <p>2</p>
                                <p>$40</p>
                            </div>
                            <div className="grid grid-cols-6 gap-x-5 border-b border-gray-300 items-center ">
                                <div>

                                    <Image
                                        src={"/images/sandwich.jpg"}
                                        height={100}
                                        width={100}
                                        alt="pizza"

                                    />
                                </div>
                                <p>Burger Pizza</p>
                                <p>Cheese</p>
                                <p>$20</p>
                                <p>2</p>
                                <p>$40</p>
                            </div>
                            <div className="grid grid-cols-6 gap-x-5 border-b border-gray-300 items-center">
                                <div>

                                    <Image
                                        src={"/images/sandwich.jpg"}
                                        height={100}
                                        width={100}
                                        alt="pizza"

                                    />
                                </div>
                                <p>Burger Pizza</p>
                                <p>Cheese</p>
                                <p>$20</p>
                                <p>2</p>
                                <p>$40</p>
                            </div>
                        </>
                    )
                }
                {
                    paid && (
                        <>
                            <div className="grid grid-cols-4 gap-x-5 font-semibold text-lg pb-5 border-b">
                                <p>Order ID</p>
                                <p>Customer</p>
                                <p>Address</p>
                                <p>Total</p>

                            </div>
                            <div className="grid grid-cols-4 gap-x-5 border-b border-gray-300 items-center py-2">
                                <p>87123effdrtggfdd5566</p>
                                <p>09876543212</p>
                                <p>10 John Street</p>
                                <p>$160  </p>
                            </div>
                            <div className="flex justify-between px-5 py-6  items-center">
                                <div className="text-5xl">
                                    < MdOutlinePhonelinkRing />
                                    <p className="text-lg">Payment</p>
                                    <GreenCheck />
                                </div>
                                <div className="animate-pulse">
                                    <Image
                                        src={"/icons/preparing.png"}
                                        height={60}
                                        width={60}
                                        alt="preparing"
                                    />
                                    <p className="text-lg">Preparing</p>
                                </div>
                                <div className="opacity-25">
                                    <Image
                                        src={"/icons/delivery.png"}
                                        height={60}
                                        width={60}
                                        alt="preparing"
                                    />
                                    <p className="text-lg">On the way</p>
                                </div>
                                <div className="text-5xl opacity-20 ">
                                    <LuPackageCheck />
                                    <p className="text-lg">Delivered</p>
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
            <div className=" w-1/4 bg-gray-700 mr-12 p-8 text-white h-2/5 fixed right-0">

                <h1 className="text-2xl font-semibold">CART TOTAL</h1>
                <div className="my-4">
                    <p>SubTotal: <span>$160</span></p>
                    <p>Discount: <span>$79.60</span></p>
                    <p>Total: <span>$160</span></p>
                </div>
                <div className="w-full font-semibold text-center" onClick={
                    !paid ? () => (
                    setDisplayBtns(true)
                ): ()=>("")}>


                    {displaybtns ? (
                        <>
                            <div className=" bg-white text-teal-400 p-1 mb-2 hover:cursor-pointer" onClick={() => setShowModal(true)}>CASH ON DELIVERY
                              
                             </div>
                            <div className=" italic bg-[#F9B304] p-1 hover:cursor-pointer"> <span className=" text-blue-700">Pay</span><span className=" text-cyan-600">Pal</span> </div>
                        </>
                    ) : (
                        <Button text={`${paid ? "PAID" : "CHECKOUT NOW!"}`} />
                        
                    )
                    }
                </div>

            </div>
        </section>
    )
}

export default Cart