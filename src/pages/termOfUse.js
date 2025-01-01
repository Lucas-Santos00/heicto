import styles from '../styles/termsOfUse.module.css'

export default function termOfUse() { 

  return (
    <div className={styles.container}>
        <p className={styles.text}>
            The Terms of Use for the .HEIC to JPG or PNG image conversion service state that users can use the service for both personal and commercial purposes, as the conversion happens directly in the browser without sending images to external servers. Users are responsible for ensuring that the images do not infringe any copyrights or intellectual property rights of third parties. The service is provided "as is," with no guarantees, and the owner is not responsible for any damages arising from its use. The owner can also modify the terms at any time. The applicable law will be that of the owner's country.
        </p>

        <hr className={styles.line} />
        
        <p className={styles.text}>
            Os Termos de Uso do serviço de conversão de imagens .HEIC para JPG ou PNG estabelecem que o usuário pode utilizar o serviço para fins pessoais ou comerciais, sem a necessidade de enviar as imagens para servidores externos, pois a conversão ocorre diretamente no navegador. O usuário é responsável por garantir que as imagens não infrinjam direitos autorais ou de propriedade intelectual de terceiros. O serviço é fornecido "como está", sem garantias, e o proprietário não se responsabiliza por danos decorrentes de seu uso. O proprietário também pode alterar os termos a qualquer momento. A legislação aplicável será a do país do proprietário do serviço.
        </p>

    </div>
  );
}
