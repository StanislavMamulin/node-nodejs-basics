import { Worker } from 'worker_threads';
import { cpus } from 'os';

const numWorkers = cpus().length;

function runWorker(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', { workerData });
        worker.on('message', (result) => resolve({ status: 'resolved', data: result }));
        worker.on('error', (error) => reject({ status: error, data: null }));
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Stopped the Worker Thread with the exit code: ${code}`));
        })
    })
}

const performCalculations = async () => {
    const promises = [];
    let dataForWorker = 10;
    for (let i = 0; i < numWorkers; i++) {
        promises.push(runWorker(dataForWorker++));
    }

    const results = await Promise.all(promises);
    console.log(results);
};

await performCalculations();