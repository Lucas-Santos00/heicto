import Styles from '../styles/teste.module.css'

export default ()=> {
    return (

        <div className={Styles.container}>
            <div id={Styles.background}>
                <div id={Styles.dialogbox}>
                    
                    <svg id={Styles.svg} viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.7978 0.952253C47.4965 0.649865 47.1383 0.410055 46.744 0.246628C46.3496 0.0832004 45.9269 -0.000615709 45.5 3.40494e-06H19.5C19.0731 -0.000615709 18.6504 0.0832004 18.256 0.246628C17.8617 0.410055 17.5035 0.649865 17.2023 0.952253L0.952253 17.2023C0.649865 17.5035 0.410055 17.8617 0.246628 18.256C0.0832004 18.6504 -0.000615709 19.0731 3.40494e-06 19.5V45.5C3.40494e-06 46.3645 0.341253 47.19 0.952253 47.7978L17.2023 64.0478C17.5035 64.3501 17.8617 64.59 18.256 64.7534C18.6504 64.9168 19.0731 65.0006 19.5 65H45.5C46.3645 65 47.19 64.6588 47.7978 64.0478L64.0478 47.7978C64.3501 47.4965 64.59 47.1383 64.7534 46.744C64.9168 46.3496 65.0006 45.9269 65 45.5V19.5C65.0006 19.0731 64.9168 18.6504 64.7534 18.256C64.59 17.8617 64.3501 17.5035 64.0478 17.2023L47.7978 0.952253ZM35.75 48.75H29.25V42.25H35.75V48.75ZM35.75 35.75H29.25V16.25H35.75V35.75Z" fill="#F3B81A"/>
                    </svg>

                    <div id={Styles.textarea} >
                        <h4>Opss...</h4>
                        <p id={Styles.spaceline} >It seems you've reached the limit</p>
                        <p>You can convert up to <span id={Styles.textColored} >50 photos</span></p>
                    </div>

                    <svg id={Styles.btnclose} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.2626 30.7285C34.7321 31.198 34.9958 31.8347 34.9958 32.4987C34.9958 33.1626 34.7321 33.7994 34.2626 34.2689C33.7931 34.7383 33.1564 35.0021 32.4924 35.0021C31.8285 35.0021 31.1917 34.7383 30.7222 34.2689L17.5 21.0425L4.2736 34.2647C3.80412 34.7342 3.16737 34.9979 2.50342 34.9979C1.83947 34.9979 1.20272 34.7342 0.733235 34.2647C0.263753 33.7952 6.99583e-09 33.1585 0 32.4945C-6.99583e-09 31.8306 0.263753 31.1938 0.733235 30.7243L13.9596 17.5021L0.737399 4.27568C0.267917 3.8062 0.00416523 3.16945 0.00416523 2.5055C0.00416524 1.84155 0.267917 1.2048 0.737399 0.735317C1.20688 0.265835 1.84364 0.00208223 2.50758 0.00208222C3.17153 0.00208221 3.80829 0.265835 4.27777 0.735317L17.5 13.9617L30.7264 0.733234C31.1959 0.263752 31.8326 -1.10614e-08 32.4966 0C33.1605 1.10614e-08 33.7973 0.263752 34.2668 0.733234C34.7363 1.20272 35 1.83947 35 2.50342C35 3.16737 34.7363 3.80412 34.2668 4.2736L21.0404 17.5021L34.2626 30.7285Z" fill="#F3F3F3"/>
                    </svg>

                </div>

            </div>

        </div>

    )
}