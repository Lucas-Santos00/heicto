import style from './styles.module.css'

const Loading = ({ popUpObjectError, setPopUpObjectError }) =>{



    return (

        <div className={style.container}>

            <div className={style.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            <p>Depending on your computer and the number of files, this may take a while.</p>
        </div>

    )

}

export default Loading