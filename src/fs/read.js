import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFile } from 'fs/promises';

const currentPath = fileURLToPath(import.meta.url);
const filePath = path.join(dirname(currentPath), 'files', "fileToRead.txt");

const read = async () => {
    try {
        const content = await readFile(filePath, 'utf-8');
        console.log(content);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        console.error(err);
    }
}

await read();