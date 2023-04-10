import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    const hash = createHash('sha256'); 

    const filename = './files/fileToCalculateHashFor.txt';
    const fileURL = new URL(filename, import.meta.url);

    const fileStream = createReadStream(fileURL);
    fileStream.on('readable', () => {
        const data = fileStream.read();
        if (data) {
            hash.update(data);
        } else {
            console.log(hash.digest('hex'));
        }
    })
};

await calculateHash();