import { useOptions } from '@/context/OptionsContext'
import styles from './style.module.css'

export default function TextArea() {

    const {options, setOptions} = useOptions();

    return(

        <div>
            <h1 id={styles.TitleTextArea} >
                Transform <br/> <strong>.HEIC</strong> to <br/> <strong>.{options.convertTo}</strong>
            </h1>
            <p id={styles.paragraph} >Ease and free!</p>
        </div>

    )

}