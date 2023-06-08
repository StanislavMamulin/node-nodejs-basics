import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const filename = './files/script.js';
    const childURL = new URL(filename, import.meta.url);

    fork(childURL, args, {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
