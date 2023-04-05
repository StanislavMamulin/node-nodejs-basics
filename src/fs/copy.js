import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'node:path';

const copy = async () => {
    const srcFolderName = 'files';
    const dstFolderName = 'files_copy';

    const modulePath = path.dirname(fileURLToPath(import.meta.url));
    const srcFolderPath = path.join(modulePath, srcFolderName);
    const dstFolderPath = path.join(modulePath, dstFolderName);

    try {
        const srcFiles = await readdir(srcFolderPath);
        await mkdir(dstFolderPath);

        for (const fileName of srcFiles) {
            const srcFile = path.join(srcFolderPath, fileName);
            const dstFile = path.join(dstFolderPath, fileName);
            copyFile(srcFile, dstFile);
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
