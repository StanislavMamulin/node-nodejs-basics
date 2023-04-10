import { stat, readFile } from 'node:fs/promises';

const read = async () => {
    const ERROR_TEXT = 'FS operation failed';
    const fileName = 'files/fileToRead.txt';

    const fileURL = new URL(fileName, import.meta.url);
    
    try {
        const dstFileExist = await stat(fileURL).then(_ => true).catch(_ => false);
        if (!dstFileExist) {
            throw new Error(ERROR_TEXT);
        }

        const fileContent = await readFile(fileURL, { encoding: 'utf-8' });
        console.log(fileContent);
    } catch(err) {
        throw new Error(err);
    }
};

await read();