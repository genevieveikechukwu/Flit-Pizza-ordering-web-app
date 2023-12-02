import Button from "@/components/button"
import Image from "next/image"


const Cart = () => {
    return (
        <section className='mt-24 pl-5 flex'>
            <div className="w-[71%]">
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
            </div>
            <div className=" w-1/4 bg-gray-700 mr-12 p-8 text-white h-2/5 fixed right-0">

                <h1 className="text-2xl font-semibold">CART TOTAL</h1>
                <div className="my-8">
                    <p>SubTotal: <span>$160</span></p>
                    <p>Discount: <span>$79.60</span></p>
                    <p>Total: <span>$160</span></p>
                </div>
                <div className="w-full font-semibold text-lg">
                    <Button text="CHECKOUT NOW!" />
                </div>
            </div>
        </section>
    )
}

export default Cart