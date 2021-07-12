const fs = require('fs');
const path = require('path');

//* Create File
const createFile = (
  folder,
  fileName,
  fileType = fileName.split('.')[1] || '',
  fileContents = "console.log('Hello World')"
) => {
  try {
    if (!fileType) {
      console.log('Filename Includes FileType');
      const newFilePath = path.join(folder, fileName);
      fs.writeFileSync(newFilePath, fileContents);
      console.log('File Written');
    } else {
      console.log("Filename Doesn't Include FileType");
      const newFilePath = path.join(folder, fileName + '.' + fileType);
      fs.writeFileSync(newFilePath, fileContents);
      console.log('File Written');
    }
  } catch (err) {
    console.error(err, 'Error Writing File');
  }
};

//* Create Folder
const createFolder = (location, folderName, fileName) => {
  const folder = path.join(__dirname, location, folderName);
  let folderExists = fs.existsSync(folder);

  if (!folderExists) {
    fs.mkdir(folder, () => {
      console.log('Created Folder');
      createFile(folder, fileName, 'js');
    });
  } else {
    console.log(`Folder \`${folder}\` already exists`);

    createFile(folder, fileName, 'js');
  }
};

createFolder('./', 'sample', 'myFile');
