// It return a .zip file with all files

import JSZip from 'jszip';


const ZipFiles = async (files) => {

    const zip = new JSZip()

     // Função para ler um arquivo como ArrayBuffer
     const readFileAsArrayBuffer = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result); // Resolve a promise com o conteúdo do arquivo
          reader.onerror = reject; // Rejeita a promise em caso de erro
          reader.readAsArrayBuffer(file); // Lê o arquivo como ArrayBuffer
        });
      };
  
      // Leitura de todos os arquivos e adição ao zip
      const filePromises = Array.from(files).map(async (file) => {
        const content = await readFileAsArrayBuffer(file); // Espera a leitura do arquivo
        zip.file(file.name, content); // Adiciona o arquivo ao zip
      });
  
      // Aguarda que todas as promessas sejam resolvidas
      await Promise.all(filePromises);
  
      // Gera o arquivo zip e inicia o download
      const zipContent = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(zipContent);
      link.download = 'arquivos.zip';
      link.click();

}

export default ZipFiles;