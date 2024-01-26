const parseEnv = () => {
    const output = Object.entries(process.env).reduce((acc, [key, value]) =>{
        if(key.startsWith('RSS_')){
            acc.push(`${key}=${value}`);
        }
        return acc;
    }, []).join('; ')
    console.log(output);
};

parseEnv();