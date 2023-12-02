import Button from '@/components/button'
import ProductCard from '@/components/productCard';
import Select from '@/components/select'
import React from 'react'
import { VscListFilter } from "react-icons/vsc";

const Products = () => {
    return (
        <section className="">
            <div className='mt-24  px-5  py-20'>
                <div className=" float-right items-center flex w-1/3 justify-between">
                    <p className='font-semibold'>Showing all 9 results</p>
                    <Select />
                </div>
                <div className='w-fit'> <Button text='Filter' cart={<VscListFilter style={{ color: "white", marginRight: "0.2rem", fontSize: "1.4rem" }} />} /></div>

            </div>
            <div className="products px-5">
                <ProductCard
                    url="/images/sandwich.jpg"
                    title="Burga Pizza"
                    subTitle="This is a burga pizza"
                    price={20}
                    stars={5}
                    slug={`/products/Burga Pizza`}
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
                    url="/images/sandwich.jpg"
                    title="Burga Pizza"
                    subTitle="This is a burga pizza"
                    price={20}
                    stars={1}
                />
                <ProductCard
                    url="/images/sandwich.jpg"
                    title="Burga Pizza"
                    subTitle="This is a burga pizza"
                    price={20}
                    stars={5}
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
    )
}

export default Products