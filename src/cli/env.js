const parseEnv = () => {
    const rssKeys = Object.entries(process.env).filter(([key, _]) => key.includes('RSS'));
    const rssKeysString = rssKeys.map((entry) => entry.join('=')).join('; ');
    console.log(rssKeysString);
};

parseEnv();
