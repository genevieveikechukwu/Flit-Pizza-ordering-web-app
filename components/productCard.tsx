import Image from "next/image"
import Button from "./button"
import Star from "./star"

interface productProps {
    url: string,
    stars?: number,
    price: number,
    title: string,
    subTitle: string

}
const ProductCard = (props: productProps) => {
    const {
        url,
        stars,
        price,
        title,
        subTitle

    } = props
    return (
        <div className=" border-gray-200 border rounded-xl p-5">
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

                <Button text="ORDER NOW" cart={true} />
            </div>

        </div>
    )
}

export default ProductCard