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

  useEffect(() => { // OnChange files input

    // Set new value of qntFilesSelected - This will be used to display the count on screen
    setQntFilesSelected(files.length)

    // Check files
    setIsPreparetedToConvert(check(files))

  }, [files])

  return (
    <>
    
      <BackGround />

      <ErrorPopUp />

      <div className='ConversorAreaContainer'>

        <BoardConversor 
          setFilesFunction={setFiles}
          files={files}
          passFunction={setTypeToConvert}
          passActualStatus={typeToConvert}
          filesQnt={qntFilesSelected}
        
        />

        <TextArea convertTo={typeToConvert} />

      </div>
    </>
  );
}
