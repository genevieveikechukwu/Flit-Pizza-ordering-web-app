'use client'
import { ReactNode } from 'react';
import { useState } from 'react';
import Content from './content';

interface ContentProps {
  children?: ReactNode;


}

const Modal:React.FC<ContentProps> = ({children}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=' p-5'>

      <button onClick={() => setShowModal(true)} className='p-2 border rounded bg-red-500'>
        Show modal using a portal
      </button>
      {showModal &&(
        <Content onClose={() => setShowModal(false)} children={children} />
      )}
    </div>
  )
}

export default Modal