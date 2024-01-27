import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const currentPath = fileURLToPath(import.meta.url);
const targetPath = path.join(dirname(currentPath), 'files', 'fresh.txt');

const create = async () => {
    try {
        await writeFile(targetPath, 'I am fresh and young', { flag: 'wx' });
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await create();