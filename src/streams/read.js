import { createReadStream } from 'node:fs';

const read = async () => {
    const filename = './files/fileToRead.txt';
    const fileURL = new URL(filename, import.meta.url);
    const fileStream = createReadStream(fileURL);

    let content = '';

    fileStream.on('data', chunk => { content += chunk });
    fileStream.on('error', error => { console.error('Error', error.message)});
    fileStream.on('end', () => { console.log(content) });
};

await read();
