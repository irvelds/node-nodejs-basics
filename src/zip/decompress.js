import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { pipeline } from 'stream/promises'
import zlib from 'zlib'
import fs from 'fs'

const __fileName = fileURLToPath(import.meta.url);
const inputPath = path.join(dirname(__fileName), "files", "fileToCompress.txt");
const outputPath = path.join(dirname(__fileName), "files", "archive.gz");

const decompress = async () => {
    try {
        await pipeline(
            fs.createReadStream(outputPath),
            zlib.createGunzip(),
            fs.createWriteStream(inputPath),
        );
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            console.log('No such file or directory');
        }
        console.error('Operation failed');
    }
};

await decompress();