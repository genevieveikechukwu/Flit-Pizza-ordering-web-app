import Image from "next/image";
import Button from "@/components/button";
import ProductCard from "@/components/productCard";
const Home = () => {
    const bg = { backgroundColor: "#F9B31D" }

    return (
        <section className="w-full flex-center flex-col text-red">
            <section className='mt-32 h-screen w-full  pl-5'>
                <div className='mt-10 h-full w-1/4 flex float-right rounded-l-full relative' style={bg}></div>
                <div className=" pt-10 w-1/2 mt-44 absolute">
                    <h1 className="  text-6xl font-bold tracking-wide leading-tight w-2/3">Handmade, With an Extra Pinch of <span className="text-red-600">Love</span></h1>
                    <p className=" text-3xl leading-10 mb-6 ">Lorem ipsum, dolor sit amet consectetur adipis. doloremque aut quas</p>
                    <Button text="ORDER NOW" cart={true} />
                </div>
                <Image
                    src={"/images/big-piz.png"}
                    width={450}
                    height={200}
                    alt="pizza"
                    className="absolute top-44 right-48"

                />
                <Image
                    src={"/images/onion.png"}
                    width={90}
                    height={90}
                    alt="pizza"
                    className="absolute -bottom-20 left-1/2"

                />
                <Image
                    src={"/images/small-pizz.png"}
                    width={200}
                    height={200}
                    alt="pizza"
                    className="absolute -bottom-44 right-28"

                />
            </section>

            <section className="w-full h-screen flex items-center  pl-5">
                <div className=" self-start">
                    <Image
                        src={"/images/turn-piz.png"}
                        width={500}
                        height={200}
                        alt="pizza"
                        className=""

                    />
                </div>

                <div className=" w-1/3 ml-24">
                    <h1 className="font-bold text-5xl mb-10">Daily Fresh and Always tasty</h1>

                    <p className="text-3xl leading-10">Lorem ipsum dolor sit amet corrupti laboriosam vitae? Officiis.</p>

                </div>
                <div>
                    <Image
                        src={"/images/garlic.png"}
                        width={80}
                        height={100}
                        alt="pizza"
                        className=""

                    />
                </div>

            </section>

            <section className=" pl-5 mb-20">
                <div className="mb-20">
                    <p className="text-red-600 font-semibold text-2xl">Popular Dishes</p>
                    <p className="text-5xl font-bold">Browse our Menu</p>
                </div>
                <div className=" grid grid-cols-3 gap-x-4 gap-y-10">
                    <ProductCard
                        url="/images/sandwich.jpg"
                        title="Burga Pizza"
                        subTitle="This is a burga pizza"
                        price={20}
                        stars={5}
                    />
                    <ProductCard
                        url="/images/burger.jpg"
                        title="Burga Pizza"
                        subTitle="This is a burga pizza"
                        price={20}
                        stars={5}
                    />
                    <ProductCard
                        url="/images/sandwich.jpg"
                        title="Burga Pizza"
                        subTitle="This is a burga pizza"
                        price={20}
                        stars={3}
                    />
                    <ProductCard
                        url="/images/small-pizz.png"
                        title="Burga Pizza"
                        subTitle="This is a burga pizza"
                        price={20}
                        stars={3.5}
                    />
                </div>
            </section>
            <section className="bg-[#FFFAEE] px-5 py-5 relative">
                <Image
                    src={"/images/pizza-half.png"}
                    width={250}
                    height={250}
                    alt="pizza"
                    className="absolute right-5 top-10"

                />
                <div className="mb-10 mt-20">
                    <p className="text-red-600 font-semibold text-2xl">Our Strength</p>
                    <p className="text-4xl font-bold">Why We Are The Best</p>
                </div>
                <div className="grid grid-cols-4 gap-x-9 mb-20">
                    <div className="flex-col">
                        <Image
                            src={"/icons/rice.png"}
                            width={30}
                            height={30}
                            alt="pizza"
                            className=""

                        />
                        <p className="font-bold my-5 ">All Kinds of Food</p>
                        <p className="text-xl">Lorem ipsum, is the dolorepturi omnis debitis quidem.</p>
                    </div>
                    <div className="flex-col">
                        <Image
                            src={"/icons/flower.png"}
                            width={30}
                            height={30}
                            alt="pizza"
                            className=""

                        />
                        <p className="font-bold my-5 ">All Kinds of Food</p>
                        <p className="text-xl">Lorem ipsum, is the dolorepturi omnis debitis quidem.</p>
                    </div>
                    <div className="flex-col">
                        <Image
                            src={"/icons/smile.png"}
                            width={30}
                            height={30}
                            alt="pizza"
                            className=""

                        />
                        <p className="font-bold my-5 ">All Kinds of Food</p>
                        <p className="text-xl">Lorem ipsum, is the dolorepturi omnis debitis quidem.</p>
                    </div>
                    <div className="flex-col">
                        <Image
                            src={"/icons/location.png"}
                            width={30}
                            height={30}
                            alt="pizza"
                            className=""

                        />
                        <p className="font-bold my-5 ">All Kinds of Food</p>
                        <p className="text-xl">Lorem ipsum, is the dolorepturi omnis debitis quidem.</p>
                    </div>
                </div>
            </section>
            <section className="pl-5 pt-5">
                <Image
                    src={"/icons/leaf.png"}
                    width={100}
                    height={100}
                    alt="pizza"
                    className=""

                />
                <div className="mb-20">
                    <p className="text-red-600 font-semibold text-2xl">Customer Feedback</p>
                    <p className="text-4xl font-bold">Client Testimonials</p>
                </div>
                <div className="grid grid-cols-4 gap-x-4">
                    <div className="flex-col justify-center items-center text-center text-xl border py-10 px-5 rounded-xl">
                        <div className="w-1/2 text-center m-auto">
                            <Image
                                src={"/images/tom.jpg"}
                                width={100}
                                height={100}
                                alt="pizza"
                                className=" rounded-full w-full"

                            /></div>
                        <p className=" font-semibold my-5">Takar Bowa</p>
                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. o deleniti earum eos natus iure quia tenetur corrupti error hic nisi, rem eius?</p>
                    </div>
                    <div className="flex-col justify-center items-center text-center text-xl border py-10 px-5 rounded-xl">
                        <div className="w-1/2 text-center m-auto">
                            <Image
                                src={"/images/client-2_sjfy2z.jpg"}
                                width={100}
                                height={100}
                                alt="pizza"
                                className=" rounded-full w-full"

                            /></div>
                        <p className=" font-semibold my-5">Takar Bowa</p>
                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. o deleniti earum eos natus iure quia tenetur corrupti error hic nisi, rem eius?</p>
                    </div>
                    <div className="flex-col justify-center items-center text-center text-xl border py-10 px-5 rounded-xl">
                        <div className="w-1/2 text-center m-auto">
                            <Image
                                src={"/images/client-3_utvld0.jpg"}
                                width={100}
                                height={100}
                                alt="pizza"
                                className=" rounded-full w-full"

                            /></div>
                        <p className=" font-semibold my-5">Takar Bowa</p>
                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. o deleniti earum eos natus iure quia tenetur corrupti error hic nisi, rem eius?</p>
                    </div>
                    <div className="flex-col justify-center items-center text-center text-xl border py-10 px-5 rounded-xl">
                        <div className="w-1/2 text-center m-auto">
                            <Image
                                src={"/images/tom.jpg"}
                                width={100}
                                height={100}
                                alt="pizza"
                                className=" rounded-full w-full"

                            /></div>
                        <p className=" font-semibold my-5">Takar Bowa</p>
                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. o deleniti earum eos natus iure quia tenetur corrupti error hic nisi, rem eius?</p>
                    </div>
    
                </div>
            </section>
        </section>
    );
};

export default Home;