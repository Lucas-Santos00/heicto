const convert = require('heic-convert/browser');

const ConvertBuffer = async (files, typeToConvert) => {

  // Verifica se é PNG, caso for qualquer outro tipo (caso der erro ou alguem burlar) ele altera para JPEG
  if(typeToConvert != 'PNG'){
    typeToConvert = 'JPEG'
  }

  // Converte todos os arquivos simultaneamente
  const convertedFiles = await Promise.all(
    Object.values(files).map(async (value) => {
      // Converte o buffer do arquivo
      const fileBuffer = await value.arrayBuffer();
      const uint8Array = new Uint8Array(fileBuffer);
      const outputBuffer = await convert({
        buffer: uint8Array, // o buffer do arquivo HEIC
        format: typeToConvert, // formato de saída (ex: "JPEG")
      });

      // Cria o arquivo a partir do buffer convertido
      return new File([outputBuffer], value.name.replace('.heic', `.${typeToConvert}`), {
        type: `image/${typeToConvert}`,
      });
    })
  );

  // Objeto de retorno
  const ObjReturn = { successfullyConvert: true, files: convertedFiles };

  console.log(ObjReturn);

  return ObjReturn;
};

export default ConvertBuffer;
