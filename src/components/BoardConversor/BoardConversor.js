import style from '@/components/BoardConversor/boardConversor.module.css'
import SelectToConvertType from '../SelectToConvertType/SelectToConvertType'
import DropFileArea from '../DropFileArea/DropFileArea'
import InputSelectFiles from '../InputSelectFiles/InputSelectFiles'
import ConverBuffer from '@/functions/ConvertBuffer'
import ZipFiles from '@/functions/zipFiles'

const BoardConversor = props =>{

    const btnConvert = async _ =>{

        const convertedFiles = await ConverBuffer(props.files, props.passActualStatus)

        if(convertedFiles.successfullyConvert){
            ZipFiles(convertedFiles.files)
        }

    }

    return(

        <div className={style.boardConversorContainer}>

            <SelectToConvertType 
                passFunction={props.passFunction} 
                passActualStatus={props.passActualStatus} 
            />

            <div className={style.boardBody}>

                <DropFileArea setFilesFunction={props.setFilesFunction}>

                    <InputSelectFiles qntFilesSelected={props.filesQnt} setFilesFunction={props.setFilesFunction} />

                </DropFileArea>

                <p className={style.paragrathCounter}>
                    {props.filesQnt == 0 ? 'No files selected yet' : `${props.filesQnt} Files selected`}
                </p>

                <button 
                    onClick={ _ => btnConvert() }
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