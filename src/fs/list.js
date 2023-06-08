import path from 'node:path';
import { stat, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';

const list = async () => {
    const ERROR_TEXT = 'FS operation failed';
    const folderName = 'files';

    const modulePath = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(modulePath, folderName);
    
    try {
        const dstFolderExist = await stat(folderPath).then(_ => true).catch(_ => false);
        if (!dstFolderExist) {
            throw new Error(ERROR_TEXT);
        }

        const files = await readdir(folderPath);
        for (const file of files) {
            console.log(file);
        }
    } catch(err) {
        throw new Error(err);
    }
};

await list();