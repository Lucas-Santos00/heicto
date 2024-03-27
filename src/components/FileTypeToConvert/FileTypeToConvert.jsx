import { useState } from 'react'
import style from './style.module.css'

export default props => {
    const btnValue = props.btnValue

    return(
        <button
        onClick={ () => props.provider.setOptions(
            {
                ...props.provider.options,
                convertTo: props.btnValue
            }
        ) }
        className={style.btn}>
            .{btnValue}
        </button>
    )

}