'use client'
import { ReactNode, useContext } from 'react';
import { createPortal } from 'react-dom';
import Content from './content';
import SettingsContext from '@/utils/context/settingsControls';

interface ContentProps {
  content?: ReactNode;



}

const Modal:React.FC<ContentProps> = ({content}) => {
const {showModal} = useContext(SettingsContext)
  return (
    <div className='  z-50' >
      {showModal && createPortal(
        <Content  content={content} />,

        document.body
      )}
    </div>
  )
}

export default Modal