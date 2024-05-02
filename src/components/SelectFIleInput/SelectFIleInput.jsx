import { useEffect, useState } from 'react'
import style from './style.module.css'

export default function SendFileInput() {

    //Contagem dos itens
    const [filesCount, setFilesCount] = useState(0)

    //Select files by drop item
    const [files, setFiles] = useState(null)

    useEffect(() => {
        
        if (files !== null) {
            setFilesCount(files.length);
        }}, [files]);

        const handleDragOver = event => event.preventDefault()
    
      const handleDrop = event => {
            // Não permitir que o navegador abra a imagem.
            event.preventDefault();
            
            // Agora você pode acessar os arquivos soltos
            console.log(event.dataTransfer.files);

            // Atualize o estado de 'files'
            setFilesCount(event.dataTransfer.files.length);

            console.log(event.dataTransfer.files.length)
        }

    //Quando selecionado os arquivos, 
    //ele muda a propriedade filesCount com a quantidade de arquivos selecionados
      function handleOnchange(event){
         setFiles(event.target.files)
        }

    return(
        <>
        <form 
            className={style.container} 
            method='POST'>

                <label 
                    className={style.labelStyles} 
                    htmlFor='form'
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}>
                    
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
                    onChange={handleOnchange} />

                <h3 className={style.h3Title}>{
                    //Verifica se já foi selecionado algum item
                    //Caso sim, altera o texto
                    filesCount == 0 ? 'No files selected yet' 
                    : `${filesCount} files selected`
                }</h3>

                <button
                className={style.btnSender} 
                type='submit'
                >{
                    //Verifica se já foi selecionado algum item
                    //Caso sim, altera o texto
                    filesCount == 0 ? 'Select files' : 'Convert'
                }</button>

                <p className={style.termOfUse}>
                    When you add the files, you accept the <a href='#'>terms of use</a> 
                </p>

        </form>
        </>
    )

}