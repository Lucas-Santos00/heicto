import style from './style.module.css'

export default function BtnSendForm(props){

    const isFileSelected = props.isFileSelected

    return(

        <>

            <button
                id={isFileSelected == false ? style.disableBtn : ''}
                disabled={!props.isFileSelected}
                className={style.btnSender} 
                type='submit'>{
                    //Verifica se já foi selecionado algum item
                    //Caso sim, altera o texto
                    props.isFileSelected == false
                    ? 'Select files' 
                    : 'Convert'
                    }
            </button>

        </>

    )

}