import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream'

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    })

    stdin.pipe(reverse).pipe(stdout);
};

await transform();