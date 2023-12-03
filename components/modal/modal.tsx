'use client'
import { ReactNode } from 'react';
import { useState } from 'react';
import Content from './content';

interface ContentProps {
  content?: ReactNode;



}

const Modal:React.FC<ContentProps> = ({content}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='' onClick={() => setShowModal(true)}>
      {showModal &&(
        <Content onClose={() => setShowModal(false)} content={content} />
      )}
    </div>
  )
}

export default Modal