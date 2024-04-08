import { useState } from 'react'
import { useOptions } from '@/context/OptionsContext'
import BtnFileTypeToConvert from '../BtnFileTypeToConvert/BtnFileTypeToConvert'
import OptionsProvider from '@/context/OptionsContext'
import SelectFIleInput from '../SelectFIleInput/SelectFIleInput'

export default function DashBoardContainer(props){
    
    const [isFileSelected, setIsFileSelected] = useState(false)
    const {options, setOptions} = useOptions();
    

    return(
        <OptionsProvider>
            <div id={props.idProps}>

                <BtnFileTypeToConvert
                    isActived={''} 
                    provider={{options, setOptions}} 
                    btnValue='PNG'/>

                <BtnFileTypeToConvert 
                    isActived={''} 
                    provider={{options, setOptions}} 
                    btnValue='JPG'/>

                <SelectFIleInput/>
            
            </div>
        </OptionsProvider>
    )
}