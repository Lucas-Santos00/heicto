import BackGround from "@/components/BackGround/BackGround";
import BoardConversor from "@/components/BoardConversor/BoardConversor";
import ErrorPopUp from "@/components/ErrorPopUp/ErrorPopUp";
import TextArea from "@/components/TextArea/TextArea";
import { useEffect, useState } from "react";

// Import tools
const check = require('@/functions/CheckAllFiles').default
const ZipFiles = require('@/functions/zipFiles').default

export default function Home() { 

  // Creat states
  const [typeToConvert, setTypeToConvert] = useState('PNG');  // JPNG / PNG -> Which type to convert
  const [files, setFiles] = useState([]) // Files on input
  const [isPreparetedToConvert, setIsPreparetedToConvert] = useState(false) //Set if it's prepareted to check
  const [qntFilesSelected, setQntFilesSelected] = useState(files.length); // How many files were selected
  const [popUpObjectError, setPopUpObjectError] = useState({
    showPopUp: false
  })

  useEffect(() => { // OnChange files input

    const isPrepared = check(files)

    // Check files - if ok set its prepared
    if(isPrepared.result){

      console.log(isPrepared.result)

      setIsPreparetedToConvert(true)

      // Set new value of qntFilesSelected - This will be used to display the count on screen
      setQntFilesSelected(files.length)

    }else if(isPrepared.message){
      setPopUpObjectError({
        showPopUp: true,
        message: isPrepared.message
      })
    }

    

  }, [files])

  return (
    <>
    
      <BackGround />

      {popUpObjectError.showPopUp ? <ErrorPopUp setPopUpObjectError={setPopUpObjectError}  popUpObjectError={popUpObjectError}/> : ''}

      <div className='ConversorAreaContainer'>

        <BoardConversor 
          setFilesFunction={setFiles}
          files={files}
          passFunction={setTypeToConvert}
          passActualStatus={typeToConvert}
          filesQnt={qntFilesSelected}
          isPreparetedToConvert={isPreparetedToConvert}
        />

        <TextArea convertTo={typeToConvert} />

      </div>
    </>
  );
}
