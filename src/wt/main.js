import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { Worker } from 'worker_threads';
import os from 'os';

const __fileName = fileURLToPath(import.meta.url);
const workerPath = path.join(dirname(__fileName), 'worker.js');
const startValue = 10;


const performCalculations = async () => {

    const workersResults = (workerData) => {
        return new Promise((resolve) => {
            const worker = new Worker(workerPath, { workerData });
            worker.on('message', (value) => resolve({ status: 'resolved', data: value }));
            worker.on('error', () => resolve({ status: 'error', data: null }));
        })
    }

    const promises = [];

    for (let i = 0; i < os.cpus().length; i++) {
        promises.push(workersResults(i + startValue))
    }

    await Promise.all(promises).then(value => {
        console.log(value)
    })

};

await performCalculations();