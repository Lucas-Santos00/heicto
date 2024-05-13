const validateData = (files) => {
    return new Promise((resolve, reject) => {

        // Verifique se a quantidade de arquivos não excede 50

        if(files.length > 50){
            reject(new Error('Quantidade de imagens excedeu a quantidade máxima de 50 fotos'))
        }else{
            //Tranformar o objeto files em um array
            //Verificar o tipo de todo os arquivos
            Object.values(files).forEach(element => {
            element.type == "image/heif" 
            ? ''
            : reject(new Error('Um ou mais arquivo(s) não é do tipo .heic'))
        });
        }

        resolve()

    });
}

export default validateData;