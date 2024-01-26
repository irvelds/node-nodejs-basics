import { fileURLToPath } from "url";
import { rm } from 'fs/promises';
import path, { dirname } from 'path';

const currentPath = fileURLToPath(import.meta.url);
const deletePath = path.join(dirname(currentPath), 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await rm(deletePath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        console.error(err);
    }
};

await remove();