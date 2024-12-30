import style from '@/components/BoardConversor/boardConversor.module.css'
import SelectToConvertType from '../SelectToConvertType/SelectToConvertType'
import DropFileArea from '../DropFileArea/DropFileArea'
import InputSelectFiles from '../InputSelectFiles/InputSelectFiles'
import ConverBuffer from '@/functions/ConvertBuffer'
import ZipFiles from '@/functions/zipFiles'
import Loading from '../Loading/Loading'

const BoardConversor = props =>{

    const btnConvert = async _ =>{

        props.setOnload(true)
        const convertedFiles = await ConverBuffer(props.files, props.passActualStatus)

        if(convertedFiles.successfullyConvert){
            ZipFiles(convertedFiles.files)
            props.setOnload(false)
            props.setFilesFunction([])
        }

    }

    return(

        <div className={style.boardConversorContainer}>

            <SelectToConvertType 
                passFunction={props.passFunction} 
                passActualStatus={props.p} 
            />

            {props.onload ? <Loading/> : ''}

            <div className={props.onload ? style.disable : style.boardBody}>

                <DropFileArea setFilesFunction={props.setFilesFunction}>

                    <InputSelectFiles qntFilesSelected={props.filesQnt} setFilesFunction={props.setFilesFunction} />

                </DropFileArea>

                <p className={props.onload ? style.disable : style.paragrathCounter}>
                    {props.filesQnt == 0 ? 'No files selected yet' : `${props.filesQnt} Files selected`}
                </p>

                <button 
                    onClick={props.isPreparetedToConvert ? () => btnConvert() : undefined}
                    style={props.filesQnt == 0 ? { backgroundColor: "#929292", cursor: "no-drop" } : {cursor: "pointer"}}
                    className={style.btnConverter}>
                    {props.filesQnt == 0 ? 'Select files' : 'Convert'}
                </button>

                <p className={style.paragrathTermsOfUse}>
                    When you add the files, you accept the terms of use
                </p>

            </div>

        </div>

    )

}

export default BoardConversor