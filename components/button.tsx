import { ReactNode } from 'react';

interface buttonProps {
    text  : string,
    cart? : ReactNode
    red?: boolean
    url?: string
}

const Button = (
props:buttonProps
) => {
  


   

  const { text, cart, red } = props
  return (
    <button className={`p-4 w-full h-10 rounded-full text-center justify-center text-white flex items-center hover:scale-105 bg-[#F9B304] ${ red ? " hover:bg-[#F53040]" : " "}` } 

    >
    {cart && (
       cart
    )} {text}
    </button>
  )
}

export default Button