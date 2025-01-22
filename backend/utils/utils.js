import fs from "fs";

export const deleteFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath, (error) => {
      if (error) {
        console.log(error);
        return error;
      }
    });
  }
};