import style from './styles.module.css'

const Loading = ({ popUpObjectError, setPopUpObjectError }) =>{



    return (

        <div className={style.container}>

            <div className={style.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            <p>Dependendo do seu computador e da quantidade de arquivos, isso pode demorar um pouco.</p>
        </div>

    )

}

export default Loading