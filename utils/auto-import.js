import fs from 'fs';
import path from 'path';

const walkSync = (dir, internal = true) => {
  const fileList = [];
  fs.readdirSync(dir)
    .forEach((file) => {
      const filePath = path.join(dir, file);
      if (internal && fs.statSync(filePath).isDirectory()) {
        fileList.push(...walkSync(filePath));
      } else {
        fileList.push(filePath);
      }
    });
  return fileList;
};

const filterFolders = folder => ['frontend', '.git', 'db'].indexOf(folder) === -1;

const autoImport = (folder, internal = false, filter = filterFolders) =>
  Promise.all(walkSync(folder, internal).filter(it =>
    // exclude mappings
    !it.includes('.map') &&
    // exclude test
    !it.includes('.spec') &&
    // only js files
    it.includes('.js'))
    .filter(filter)
    .map(it => import(`../${it}`)));

export default autoImport;
