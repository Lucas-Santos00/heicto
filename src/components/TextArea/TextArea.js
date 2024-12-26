import style from './style.module.css'

const TextArea = (props) => {
    return(
        <div className={style.textAreaContainer}>
            <h1 className={style.text} >
                    Transform <br/>
                    <span className={style.weightBold} >.HEIC</span> to <br/>
                    .<span className={style.weightBold} >{props.convertTo}</span>
            </h1>

            <span className={style.spanText}>
                Without limits to you!
            </span>
        
        </div>
    )
}

// Add display name to the component
TextArea.displayName = 'TextArea'

export default TextArea
