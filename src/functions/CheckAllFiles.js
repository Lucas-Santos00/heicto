// This files must be less than 350Mb (X)
// Recive a Array of files (X)
// Chekc if all files is .heic (X)
// Less than 150 files (X)
// Return True, if it's pass all testes (X)
// Throw error if no pass (x)

import { file } from "jszip";

const CheckAllFilesType = (files) => {
  let filesSize = 0;

  try {
    if (!Array.isArray(files)) {
      throw new Error("It must be an Array");
    } else if (files.length > 150) {
      throw new Error("Too many files - Max 150 files");
    }

    // Check if it's a .heic file and the total files size
    files.forEach((file) => {
      const isHeic = file.name.toLowerCase().slice(-4) == "heic" ? true : false;
      filesSize += file.size;

      if (!isHeic) {
        const fileName =
          file.name.length > 22 ? file.name.slice(0, 16) + "..." : file.name;
        throw new Error(`The file ${fileName} is not a .heic file!`);
      }

      if (filesSize > 262144000) {
        throw new Error("File size too long - Max 250Mb");
      }
    });

    if (files.length == 0) {
      return { result: false };
    }
  } catch (error) {
    return { result: false, message: error.message };
  }

  return { result: true };
};

export default CheckAllFilesType;
