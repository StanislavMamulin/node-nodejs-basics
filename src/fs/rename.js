import path from 'node:path';
import promises from 'node:fs/promises';
import { fileURLToPath } from 'url';

const rename = async () => {
    const ERROR_TEXT = 'FS operation failed';
    const oldFileName = 'files/wrongFilename.txt';
    const newFileName = 'files/properFilename.md';

    const modulePath = path.dirname(fileURLToPath(import.meta.url));
    const oldPath = path.join(modulePath, oldFileName);
    const newPath = path.join(modulePath, newFileName);
    

    try {
        const dstFileExist = await promises.stat(newPath).then(_ => true).catch(_ => false);
        if (dstFileExist) {
            throw new Error(ERROR_TEXT);
        }

        await promises.rename(oldPath, newPath);
    } catch(err) {
        throw new Error(ERROR_TEXT);
    }
};

await rename();
