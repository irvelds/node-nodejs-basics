
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { fork } from 'child_process';

const __fileName = fileURLToPath(import.meta.url);
const scriptPath = path.join(dirname(__fileName), 'files', 'script.js');


const spawnChildProcess = async (args) => {
    
    const child = fork(scriptPath, args, { silent: true });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

};

spawnChildProcess(['1', '2', '3', '4', '5']);