import { createContext } from "react";


export interface Settings{
    isAdmin: boolean,
    setAdmin: (id:string) => void,
    setShouldShowCart: (shouldShowCart: boolean) => void,
    shouldShowCart: boolean,
}


const SettingsContext = createContext<Settings>({
    isAdmin: false,
    setAdmin: ()=>{},
    setShouldShowCart: () => { },
    shouldShowCart: false
})

export default SettingsContext;