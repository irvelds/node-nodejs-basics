import { fileURLToPath } from "url";
import path, { dirname } from "path";
import {pipeline} from 'stream/promises'
import zlib from 'zlib'
import fs from 'fs'

const __fileName = fileURLToPath(import.meta.url);
const inputPath = path.join(dirname(__fileName), "files", "fileToCompress.txt");
const outputPath = path.join(dirname(__fileName), "files", "archive.gz");

const compress = async () => {
    try {
        await pipeline(
            fs.createReadStream(inputPath),
            zlib.createGzip(),
            fs.createWriteStream(outputPath),
        );
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            console.log('No such file or directory');
        }
        console.log('Operation failed');
    }
};

await compress();