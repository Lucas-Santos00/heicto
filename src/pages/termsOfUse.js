import { ST } from 'next/dist/shared/lib/utils'
import Style from '../styles/termOfUse.module.css'

export default function termsOfUse (){

    return(

        <div className={Style.container} >

            <a className={Style.backBtn} href='/'>
                <svg viewBox="0 0 512 512">
                    <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
                </svg>
            </a>

            <div className={Style.langueContainer} id={Style.border} >
                <h4 className={Style.termTitle} >Terms of Use</h4>
                <p className={Style.textBottomMargin} >By using the image conversion service offered by this website, you agree to the following terms:</p>
                <ol>

                    <li>
                        By clicking the "Convert" button, you agree to upload your .HEIC images to our servers for processing.
                    </li>

                    <li>
                        Your images will be converted to the requested format (.JPG/.PNG) and temporarily stored on our servers.
                    </li>

                    <li>
                    After a 5-minute period from the time of conversion, the files will be automatically deleted from our servers. We will not retain copies of your images after this period.
                    </li>

                    <li>
                    We commit to not using your images for any purpose other than the conversion process. They will not be shared, sold, or used for any other purpose.
                    </li>
                    
                    <li>
                    This service is intended solely for the conversion of .HEIC images to .JPG/.PNG and should not be used for any other purpose.
                    </li>

                    <li>
                    We are not responsible for the content of the images uploaded by users. It is the user's responsibility to ensure they have the necessary rights to use and convert the uploaded images.
                    </li>

                </ol>

                <p className={Style.textTopMargin} >By using this service, you agree to these terms of use. If you do not agree with these terms, please do not use the service.</p>
            </div>

            <div className={Style.langueContainer}>
                <h4 className={Style.termTitle} >Termos de Uso</h4>
                <p className={Style.textBottomMargin} >Ao utilizar o serviço de conversão de imagens oferecido por este site, você concorda com os seguintes termos:</p>
                <ol>

                    <li>
                        Ao clicar no botão "Converter", você concorda em enviar suas imagens .HEIC para nossos servidores para processamento.
                    </li>

                    <li>
                    Suas imagens serão convertidas para o formato solicitado (.JPG/.PNG) e armazenadas temporariamente em nossos servidores.
                    </li>

                    <li>
                    Após o período de 5 minutos a partir do momento da conversão, os arquivos serão automaticamente excluídos de nossos servidores. Não reteremos cópias das suas imagens após esse período.
                    </li>

                    <li>
                    Comprometemo-nos a não utilizar suas imagens para qualquer finalidade além do processo de conversão. Elas não serão compartilhadas, vendidas ou utilizadas para qualquer outro fim.
                    </li>

                    <li>
                    Este serviço destina-se exclusivamente à conversão de imagens .HEIC para .JPG/.PNG e não deve ser utilizado para qualquer outra finalidade.
                    </li>

                    <li>
                    Não nos responsabilizamos pelo conteúdo das imagens enviadas pelos usuários. É de responsabilidade do usuário garantir que possuem os direitos necessários para usar e converter as imagens enviadas.
                    </li>

                </ol>

                <p className={Style.textTopMargin} >Ao utilizar este serviço, você concorda com estes termos de uso. Se não concordar com estes termos, por favor, não utilize o serviço.</p>
            </div>

        </div>

    )

}