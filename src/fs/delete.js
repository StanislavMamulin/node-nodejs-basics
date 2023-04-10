import path from 'node:path';
import promises from 'node:fs/promises';
import { fileURLToPath } from 'url';

const remove = async () => {
    const ERROR_TEXT = 'FS operation failed';
    const fileName = 'files/fileToRemove.txt';

    const modulePath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(modulePath, fileName);
    
    try {
        const dstFileExist = await promises.stat(filePath).then(_ => true).catch(_ => false);
        if (!dstFileExist) {
            throw new Error(ERROR_TEXT);
        }

        await promises.rm(filePath)
    } catch(err) {
        throw new Error(ERROR_TEXT);
    }
};

await remove();