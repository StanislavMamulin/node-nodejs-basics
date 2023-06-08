import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const filename = './files/fileToCompress.txt';
    const archiveFilename = './files/archive.gz'
    const fileURL = new URL(filename, import.meta.url);
    const archiveURL = new URL(archiveFilename, import.meta.url);

    const gzip = createGzip();
    const source = createReadStream(fileURL);
    const destination = createWriteStream(archiveURL);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        } else {
            console.log('Archive created!');
        }
    });
};

await compress();
