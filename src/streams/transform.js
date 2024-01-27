import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, _encoding, callback) {
            const chunks = chunk.toString().split('');
            const lastSymbol = chunks.pop();
            const reverseStr = chunks.reverse().concat(lastSymbol).join('');
            callback(null, reverseStr);
        }
    });
    await pipeline(process.stdin, reverseStream, process.stdout);
};

await transform();