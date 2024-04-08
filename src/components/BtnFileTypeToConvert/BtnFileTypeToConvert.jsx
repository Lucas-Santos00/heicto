import { useState } from 'react'
import style from './style.module.css'

export default function FileTypeToConvert(props) {
    const btnValue = props.btnValue
    const fileTypeSelected = props.provider.options.convertTo
    const objectContext = props.provider.options

    return(
        <button
        id={fileTypeSelected == btnValue ? style.btnActived : ''}

        onClick={ () => props.provider.setOptions(
            {
                ...objectContext,
                convertTo: props.btnValue
            }
        ) }
        
        className={style.btn}>
            .{btnValue}
        </button>
    )

}