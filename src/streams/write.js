import { fileURLToPath } from "url";
import path, { dirname } from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const currentPath = fileURLToPath(import.meta.url);
const targetPath = path.join(dirname(currentPath), 'files', 'fileToWrite.txt');


const stream = createWriteStream(targetPath, { flags: 'a' });

const write = async () => {
    await pipeline(process.stdin, stream);
};

await write();