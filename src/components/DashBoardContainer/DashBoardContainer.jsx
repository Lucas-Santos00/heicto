import { useState } from 'react'
import { useOptions } from '@/context/OptionsContext'
import FileTypeToConvert from '../FileTypeToConvert/FileTypeToConvert'
import OptionsProvider from '@/context/OptionsContext'

export default props =>{
    
    const [isFileSelected, setIsFileSelected] = useState(false)
    const {options, setOptions} = useOptions();

    console.log(options.convertTo)

    return(
        <OptionsProvider>
            <div id={props.idProps}>

                <FileTypeToConvert
                    isActived={''} 
                    provider={{options, setOptions}} 
                    btnValue='PNG'/>

                <FileTypeToConvert 
                    isActived={''} 
                    provider={{options, setOptions}} 
                    btnValue='JPG'/>

            </div>
        </OptionsProvider>
    )
}