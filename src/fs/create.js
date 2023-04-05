import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'node:path';

const create = async () => {
    const fileName = 'fresh.txt';
    const modulePath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(modulePath, 'files', fileName)

    const content = 'I am fresh and young';

    try {
        await writeFile(filePath, content, { flag: 'ax'});
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();