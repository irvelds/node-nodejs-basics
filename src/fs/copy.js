import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { mkdir, cp } from 'fs/promises';
import { isExistPath } from './../utilites/isExist.js';

const currentPath = fileURLToPath(import.meta.url);
const originPath = path.join(dirname(currentPath), 'files');
const copyPath = path.join(dirname(currentPath), 'files_copy');

const copy = async () => {
    if (await isExistPath(copyPath) || !(await isExistPath(originPath))) {
        throw new Error('FS operation failed');
    }
    else {
        await Promise.all([mkdir(copyPath), cp(originPath, copyPath, { recursive: true })])
    }
}

copy();