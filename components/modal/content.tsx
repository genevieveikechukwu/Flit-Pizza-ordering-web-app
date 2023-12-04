import React, {ReactNode, useContext} from 'react'
import SettingsContext from '@/utils/context/settingsControls';
interface ContentProps{
    content?: ReactNode;

    
}

const Content:React.FC<ContentProps> = ({content}) => {
  const { setShowModal } = useContext(SettingsContext)
  return (
    <div className="fixed h-[80vh] top-[10%] mx-auto w-1/3 z-50 border border-gray-300 rounded-lg bg-white p-5 left-[30%]">
      <div>{content}</div>
      <button onClick={() => setShowModal(false)} className='text-red-700 p-2 border border-gray-300 rounded text-center float-right w-28 hover:bg-red-700  hover:text-white'>Close</button>
    </div>

  )
}

export default Content