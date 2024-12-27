import style from '@/components/DropFileArea/DropFileArea.module.css';
import { useState } from 'react';

const DropFileArea = props =>{

    // Control if user is dragging somethin on the dropBoxContainer
    // It change the styles
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(true);
      };

      const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);
      };

      const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);
      
        const files = Array.from(event.dataTransfer.files);
        props.setFilesFunction(files)
      };
      

    return(

       <div className={style.dropBoxContainer}  
       onDragOver={handleDragOver}
       onDragLeave={handleDragLeave}
       onDrop={handleDrop}>
        
            {props.children}

       </div>

    )

}

export default DropFileArea