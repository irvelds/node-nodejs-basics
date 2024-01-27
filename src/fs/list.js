import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readdir } from 'fs/promises';

const currentPath = fileURLToPath(import.meta.url);
const filesPath = path.join(dirname(currentPath), 'files');

const list = async () => {
    try {
        const listFiles = await readdir(filesPath);
        console.log(listFiles);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        console.error(err);
    }
}

await list();