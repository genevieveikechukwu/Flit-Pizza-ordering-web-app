import { createContext } from "react";


export interface Settings{
    isAdmin: boolean,
    setAdmin: (isAdmin: boolean) => void,
    setShowModal: (ShowModal: boolean) => void,
    showModal: boolean,
}


const SettingsContext = createContext<Settings>({
    isAdmin: false,
    setAdmin: ()=>{},
    setShowModal: () => { },
    showModal: false
})

export default SettingsContext;