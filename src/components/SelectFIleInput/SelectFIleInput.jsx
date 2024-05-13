import { useState } from 'react'
import style from './style.module.css'
import validateData from '@/tools/validateData'
import ErrorModal from '../ErrorModal/ErrorModal'
import BtnSendForm from '../BtnSendForm/BtnSendForm'

export default function SendFileInput() {
    
    //Hook para gerenciar os estados
   const [handleStates, setHandleStates] = useState({
        files: [],
        filesCount: 0,
        isFileSelected: false
   })

   const [sendError, setSendError] = useState({
        errorActive: false,
        message: ''
   })

   //Valores do hook
   const files = handleStates.files
   const filesCount = handleStates.filesCount
   const isFileSelected = handleStates.isFileSelected

   const handleDragOver = event => event.preventDefault()
   const handleDrop = event => {

        event.preventDefault()

        const dataEvent = event.dataTransfer.files

        validateData(dataEvent)
        .then( _ => { 

            setHandleStates({
                ...handleStates,
                files: dataEvent,
                filesCount: dataEvent.length,
                isFileSelected: true
            })

         })
        .catch( error => {
            setSendError(true)
        })

   }

   const inputBtnHandle = event =>{

        const dataEvent = event.target.files

        validateData(dataEvent)
        .then(_ => { 

            setHandleStates({
                ...handleStates,
                files: dataEvent,
                filesCount: dataEvent.length,
                isFileSelected: true
            })

         })
        .catch( error => {
            setSendError({
                ...sendError,
                errorActive: true,
                message: error.message
            })
        })
    }

    const turnOffModal = _ =>{
        setSendError(false)
    }
   
   return(
        <>
        <ErrorModal turnOffModal={turnOffModal} sendError={sendError} />

        <form 
            className={style.container} 
            method='POST'>

                <label 
                    className={style.labelStyles} 
                    htmlFor='form'
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}>
                    
                    <img src={
                        isFileSelected == false 
                        ? 'http://localhost:3000/AddIcon.svg' 
                        : 'http://localhost:3000/Emoji.svg'
                    } alt='Add icon'/>
                    
                    <div>
                        <h4>Select files</h4>
                        <p>Or drop here</p>
                    </div>
                </label>
                
                <input className={style.disable} id='form' 
                    multiple 
                    type='file' 
                    accept='image/heic' 
                    onChange={inputBtnHandle} />

                <h3 className={style.h3Title}>{
                    //Verifica se já foi selecionado algum item
                    //Caso sim, altera o texto
                    isFileSelected == false
                    ? 'No files selected yet' 
                    : `${filesCount} files selected`
                }</h3>

                <BtnSendForm isFileSelected={isFileSelected} />

                <p className={style.termOfUse}>
                    When you add the files, you accept the <a href='/termsOfUse'>terms of use</a> 
                </p>

        </form>
        </>
    )

}