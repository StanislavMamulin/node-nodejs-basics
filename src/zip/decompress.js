import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    const filename = './files/fileToCompress.txt';
    const archiveFilename = './files/archive.gz'
    const fileURL = new URL(filename, import.meta.url);
    const archiveURL = new URL(archiveFilename, import.meta.url);

    const gunzip = createGunzip();
    const source = createReadStream(archiveURL);
    const destination = createWriteStream(fileURL);

    pipeline(source, gunzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        } else {
            console.log('Archive decompressesed!');
        }
    });
};

await decompress();