import style from './errorPopUp.module.css'

const ErrorPopUp = ({ popUpObjectError, setPopUpObjectError, closePopUp }) =>{

    return (

        <div className={style.popUpMain}>

            <div className={style.popUpShape}>

            <svg className={style.closeBtn} 
                onClick={() => closePopUp()}
                width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5365 19.315C21.8316 19.6101 21.9974 20.0104 21.9974 20.4277C21.9974 20.8451 21.8316 21.2453 21.5365 21.5404C21.2414 21.8355 20.8411 22.0013 20.4238 22.0013C20.0065 22.0013 19.6062 21.8355 19.3111 21.5404L11 13.2267L2.68626 21.5378C2.39116 21.8329 1.99092 21.9987 1.57358 21.9987C1.15624 21.9987 0.755993 21.8329 0.46089 21.5378C0.165787 21.2427 4.39738e-09 20.8425 0 20.4251C-4.39738e-09 20.0078 0.165787 19.6075 0.46089 19.3124L8.77463 11.0013L0.463508 2.68757C0.168405 2.39247 0.00261814 1.99223 0.00261815 1.57489C0.00261815 1.15755 0.168405 0.757302 0.463508 0.462199C0.758611 0.167096 1.15886 0.00130883 1.5762 0.00130882C1.99353 0.00130882 2.39378 0.167096 2.68888 0.462199L11 8.77594L19.3137 0.46089C19.6088 0.165787 20.0091 -6.95286e-09 20.4264 0C20.8438 6.95286e-09 21.244 0.165787 21.5391 0.46089C21.8342 0.755993 22 1.15624 22 1.57358C22 1.99092 21.8342 2.39116 21.5391 2.68626L13.2254 11.0013L21.5365 19.315Z" fill="#F3F3F3"/>
            </svg>


                <div className={style.contentArea}>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.7978 0.952253C47.4965 0.649865 47.1383 0.410055 46.744 0.246628C46.3496 0.0832004 45.9269 -0.000615709 45.5 3.40494e-06H19.5C19.0731 -0.000615709 18.6504 0.0832004 18.256 0.246628C17.8617 0.410055 17.5035 0.649865 17.2023 0.952253L0.952253 17.2023C0.649865 17.5035 0.410055 17.8617 0.246628 18.256C0.0832004 18.6504 -0.000615709 19.0731 3.40494e-06 19.5V45.5C3.40494e-06 46.3645 0.341253 47.19 0.952253 47.7978L17.2023 64.0478C17.5035 64.3501 17.8617 64.59 18.256 64.7534C18.6504 64.9168 19.0731 65.0006 19.5 65H45.5C46.3645 65 47.19 64.6588 47.7978 64.0478L64.0478 47.7978C64.3501 47.4965 64.59 47.1383 64.7534 46.744C64.9168 46.3496 65.0006 45.9269 65 45.5V19.5C65.0006 19.0731 64.9168 18.6504 64.7534 18.256C64.59 17.8617 64.3501 17.5035 64.0478 17.2023L47.7978 0.952253ZM35.75 48.75H29.25V42.25H35.75V48.75ZM35.75 35.75H29.25V16.25H35.75V35.75Z" fill="#F3B81A"/>
                    </svg>

                    <div className={style.textContainer}>
                        <strong>Opsss..</strong>
                        <p>{popUpObjectError.message}</p>
                    </div>
                </div>

            </div>

        </div>

    )

}

export default ErrorPopUp