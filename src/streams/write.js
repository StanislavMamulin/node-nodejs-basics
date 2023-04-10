import { createWriteStream } from 'node:fs';
import { createInterface } from 'node:readline';

const write = async () => {
    const filename = './files/fileToWrite.txt';
    const fileURL = new URL(filename, import.meta.url);
    const fileStream = createWriteStream(fileURL);
    
    const greeting = 'Enter text to write to the file.\
    \nTo finish writing, please type "exit" or press "ctrl + c"';

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log(greeting);
    rl.on('line', line => {
        if (line.toLowerCase() === 'exit') {
            rl.close();
            return;
        }
        
        fileStream.write(line += '\n');
    });
  
    rl.on('close', () => {
        console.log('That\'s all Folks!!!');
    });
};

await write();
