import { FaCartShopping } from "react-icons/fa6";

interface buttonProps {
    text  : string,
    cart? : boolean
}

const Button = (
props:buttonProps
) => {
    const bg = { backgroundColor: "#F9B304"}
    const style = { color: "white", marginRight: "0.8rem" }

    const {text, cart} = props
  return (
    <button className="p-4  h-10 rounded-full text-center align-middle text-white flex items-center hover:scale-105" style={bg}>
    {cart && (
              <FaCartShopping style={style} /> 
    )} {text}
    </button>
  )
}

export default Button