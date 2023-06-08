const parseArgs = () => {
    const args = process.argv.slice(2);
    const argsStrings = [];

    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].slice(2);
        const value = args[i+1];
        
        argsStrings.push(`${propName} is ${value}`);
    }

    console.log(argsStrings.join(', '));
};

parseArgs();
