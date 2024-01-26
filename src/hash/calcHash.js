import { fileURLToPath } from "url";
import path, { dirname } from 'path';
import { readFile } from 'fs/promises';
import crypto from 'crypto';

const currentPath = fileURLToPath(import.meta.url);
const targetPath = path.join(dirname(currentPath), 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    try {
        const contentFile = await readFile(targetPath);
        const hash = crypto.createHash('sha256').update(contentFile);
        const digest = hash.digest('hex');
        console.log(digest);
    }
    catch (err) {
        console.error(err);
    }
};

await calculateHash();