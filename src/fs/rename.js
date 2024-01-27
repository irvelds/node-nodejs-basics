import { rename as renameFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { isExistPath } from './../utilites/isExist.js';

const currentPath = fileURLToPath(import.meta.url);
const originPath = path.join(dirname(currentPath), 'files', 'wrongFilename.txt');
const newPath = path.join(dirname(currentPath), 'files', 'properFilename.md');

const rename = async () => {
    if (await isExistPath(newPath) || !(await isExistPath(originPath))) {
        throw new Error('FS operation failed');
    } else {
        await renameFile(originPath, newPath);
    }
};

await rename();