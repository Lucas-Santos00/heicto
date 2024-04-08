import { useEffect, useState } from 'react'
import style from './style.module.css'

export default function SendFileInput() {

    const [filesCount, setFilesCount] = useState(0)


      function handleFileChange(event){
         const images = event.target.files

         setFilesCount(images.length)
        }

    return(
        <>
        <form className={style.container} method='POST'>

                <label className={style.labelStyles} htmlFor='form'>
                    <img src={
                        filesCount == 0 ? 'http://localhost:3000/AddIcon.svg' 
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
                    onChange={handleFileChange} />

                <hr/>

                <h3 className={style.h3Title}>{
                    filesCount == 0 ? 'No files selected yet' 
                    : `${filesCount} files selected`
                }</h3>

                <button
                className={style.btnSender} 
                type='submit'>
                    {filesCount == 0 ? 'Select files' 
                    : 'Convert'
                }</button>

                <p className={style.termOfUse}>
                    When you add the files, you accept the <a href='#'>terms of use</a> 
                </p>

        </form>
        </>
    )

}