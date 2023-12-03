import Image from "next/image"

const Dashboard = () => {
  return (
  <section className="mt-24 px-5">
      <div className="text-3xl font-semibold my-4 flex"><span>Products</span><span className="ml-[40%] block">Orders</span></div>
    <div className="flex w-full justify-between">
        <div className="mr-4">
          <div className="grid grid-cols-5 gap-x-5 font-semibold text-lg pb-5 border-b">
            <p>Image</p>
            <p>Id</p>
            <p>Title</p>
            <p>Price</p>
            <p>Action</p>
          </div>

          <div className="grid grid-cols-5 gap-x-5 border-b border-gray-300 items-center">
            <div>

              <Image
                src={"/images/sandwich.jpg"}
                height={100}
                width={100}
                alt="pizza"

              />
            </div>
            <p>2345rt</p>
            <p>Burga Pizza</p>
            <p>$20</p>
            <p className="flex justify-between text-white"><span className=" bg-green-800 p-1">Edit</span><span className=" bg-red-600 p-1">Delete</span></p>
          </div>
          <div className="grid grid-cols-5 gap-x-5 border-b border-gray-300 items-center ">
            <div>

              <Image
                src={"/images/sandwich.jpg"}
                height={100}
                width={100}
                alt="pizza"

              />
            </div>
            <p>2345rt</p>
            <p>Burga Pizza</p>
            <p>$20</p>
            <p className="flex justify-between text-white"><span className=" bg-green-800 p-1">Edit</span><span className=" bg-red-600 p-1">Delete</span></p>
          
          </div>
          <div className="grid grid-cols-5 gap-x-5 border-b border-gray-300 items-center ">
            <div>

              <Image
                src={"/images/sandwich.jpg"}
                height={100}
                width={100}
                alt="pizza"

              />
            </div>
            <p>2345rt</p>
            <p>Burga Pizza</p>
            <p>$20</p>
            <p className="flex justify-between text-white"><span className=" bg-green-800 p-1">Edit</span><span className=" bg-red-600 p-1">Delete</span></p>
          
          </div>
          <div className="grid grid-cols-5 gap-x-5 border-b border-gray-300 items-center">
            <div>

              <Image
                src={"/images/sandwich.jpg"}
                height={100}
                width={100}
                alt="pizza"

              />
            </div>
            <p>2345rt</p>
            <p>Burga Pizza</p>
            <p>$20</p>
            <p className="flex justify-between text-white"><span className=" bg-green-800 p-1">Edit</span><span className=" bg-red-600 p-1">Delete</span></p>
          
          </div>
        </div>
        <div className="ml-4">
          <div className="grid grid-cols-6 gap-x-5 font-semibold text-lg pb-5 border-b">
            <p>Id</p>
            <p>Customer</p>
            <p>Total</p>
            <p>Payment</p>
            <p>Status</p>
            <p>Action</p>

          </div>
          <div className="grid grid-cols-6 gap-x-5 border-b border-gray-300 items-center py-2">
            <p>87123effdrt</p>
            <p>09876543212</p>
            <p>$160  </p>
            <p>Cash</p>
            <p>Preparing</p>
            <p className="bg-green-700 p-1 text-white">Next Stage</p>
          </div>
        </div>
    </div>
  </section>
  )
}

export default Dashboard