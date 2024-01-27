import { fileURLToPath } from "url";
import path, { dirname } from 'path';
import { createReadStream } from 'fs';
import os from 'os';

const currentPath = fileURLToPath(import.meta.url);
const targetPath = path.join(dirname(currentPath), 'files', 'fileToRead.txt');

const stream = createReadStream(targetPath);

const read = async () => {
   stream.on('data', (chunk) => console.log(chunk.toString() + os.EOL));
};

await read();