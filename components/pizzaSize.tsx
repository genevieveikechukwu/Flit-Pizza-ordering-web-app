import Image from "next/image"

interface PizzaSizeProps {
    size: string,
    width: number,

}

const PizzaSize = (props:PizzaSizeProps) => {
    const {size = "small" || "medium" || "large", width} = props
  return (
    <div className="pr-12">
          <div className="relative">        
           <span className="bg-[#F53040] p-1 text-xs rounded-full text-white absolute left-3/4 -top-2">{size}</span>
           
           </div>
 

          <Image 
           src={"/icons/pizza-size.png"}
           height={width}
           width={width}
           alt="pizza-size"
          />

    </div>
  )
}

export default PizzaSize