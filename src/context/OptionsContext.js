import { useState, useContext,createContext } from "react";

const OptionsContext = createContext()

export default function OptionsProvider({children}){

    const [options, setOptions] = useState( {
        isFileSelected: false,
        convertTo: 'PNG'
    } )

    return(
        <OptionsContext.Provider
            value={{
                options,
                setOptions
            }}
        >
            {children}
        </OptionsContext.Provider>
    )

}

export function useOptions (){
    const context = useContext(OptionsContext);
    const {options, setOptions} = context;
    return {options, setOptions}
}