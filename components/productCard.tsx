"use client"

import Image from "next/image"
import Button from "./button"
import Star from "./star"
import { FaCartShopping } from "react-icons/fa6";
import { useRouter } from 'next/navigation'

interface productProps {
    url: string,
    stars?: number,
    price: number,
    title: string,
    subTitle: string
    slug?: string

}
const ProductCard = (props: productProps) => {
    const {
        url,
        stars,
        price,
        title,
        subTitle,
        slug

    } = props
    const router = useRouter()
    const getProductSlug = async (url: string) => {
       router.push(url)
    } 

    const cartStyle = { color: "white", marginRight: "0.8rem" }
    return (
        <div className="border-gray-200 border rounded-xl p-5 cursor-pointer" onClick={()=>getProductSlug(slug || "/products")} >
            <Image
                src={url}
                height={300}
                alt="pizza"
                width={300}
                className="w-full"

            />

            <div className=" flex-col items-center">
                <div className="flex items-center mb-5"><p className="text-2xl font-bold mr-14">{title}</p> <span className="text-red-600 font-semibold text-2xl">${price}</span></div>
                <Star star={stars}/>

                <p className="mt-5 mb-5">{subTitle} </p>
                <p className="w-fit">  <Button text="ORDER NOW" cart={<FaCartShopping style={cartStyle} />} /></p>
              
            </div>

        </div>
    )
}

export default ProductCard