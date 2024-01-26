const parseArgs = () => {
    const output = process.argv.slice(2).reduce((acc, item, index, arr) => {
        if (item.startsWith('--')) {
            acc.push(`${item.slice(2)} is ${arr[index + 1]}`);
        }
        return acc
    }, []).join(', ')
    console.log(output);
};

parseArgs();