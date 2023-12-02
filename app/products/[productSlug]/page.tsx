import Button from '@/components/button'
import PizzaSize from '@/components/pizzaSize'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";

const Pizza = ({ params }: { params: { productSlug: string } }) => {
  return (
    <section className="mt-24">
      <div className="flex h-full items-center">
        <div className="w-1/2">
          <Image 
          src={"/images/sandwich.jpg" }
          height={100}
          width={300}
          alt='Pizza'
          className='w-full'
          />
        </div>
        <div className="flex-col justify-between items-center">
          <div className="">
            <h1 className='text-3xl font-semibold'>Burga Pizza</h1>
            <p className='text-gray-300 text-xl my-3'><span className='text-[#F53040] font-bold'>$20</span> 8 Reviews</p>
            <p className='my-3'>This is a burga pizza</p>
            <p className='my-3'>Category: Chicken, Launch, Pizza, Burger</p>
            <p className='my-3'>Tags: Healthy, Organic, Chicken, Sauce</p>
          </div>
          <div className="my-10">
            <p className='font-semibold text-xl mb-3'>Choose Pizza Size</p>
            <div className='flex items-center'>
              {[{ pizzaWidth: 40, size: "Small" }, { pizzaWidth: 60, size: "Medium" }, { pizzaWidth: 80, size: "Large" } ].map((size, index)=>(
                <PizzaSize width={size.pizzaWidth} size={`${size.size}`} key={index} />
               ))
               }
            </div>
          </div>
          <div className="">
            <p className='text-xl font-semibold'>Choose  additional ingredients</p>
          <input type="checkbox" name="" id="" className='inline'/>Sauce
          </div>
          <div className="flex items-center justify-between gap-x-4 mt-10">
            <div>
            <input type="number" name="" id="" className='border h-10 border-gray-600 block' defaultValue={1}/></div>
            <div className='md:text-lg text-xs font-semibold'><Button text='ADD TO CART' red={true}/></div>
            <div className=' h-12 w-12 rounded-full bg-[#FFFFFA] p-5 flex items-center justify-center border-gray-300 border hover:text-[#F53040] hover:cursor-pointer'>
              <div className='text-xl'>
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pizza