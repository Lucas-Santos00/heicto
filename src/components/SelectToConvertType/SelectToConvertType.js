import style from '@/components/SelectToConvertType/SelectToConvertType.module.css'

const SelectToConvertType = props =>{

    return(

        <div className={style.SelectToConvertType}>

            <button 
                className={props.passActualStatus == 'PNG' ? style.activedButton : ''}
                onClick={() => props.passFunction('PNG')}
                >.PNG</button>

            <button 
                className={props.passActualStatus == 'JPG' ? style.activedButton : ''}
                onClick={() => props.passFunction('JPG')}
                >.JPG</button>

        </div>

    )

}

export default SelectToConvertType