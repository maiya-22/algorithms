// rewrite the JSON.stringify functinality
// need to remove the last trailing commas, after objects:

function stringify(data) {
    let string = "";
    const checkType = (item) => {
        if (Array.isArray(item)) return 'array'
        if (typeof item === 'object') return 'object'
        return 'primitive';
    }
    let type = checkType(data);
    if (type === 'array') {
        string += `[ `
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            let itemType = checkType(item);
            string += itemType === 'primitive' ? item : stringify(item);
            if (i != data.length - 1) string += ', '
        }
        string += ` ], `
    } else if (type === 'object') {
        string += '{ '
        for (let key in data) {
            let item = data[key];
            let itemType = checkType(item);
            string += `${key} : `
            string += itemType === 'primitive' ? item : stringify(item);
        }
        string += ' },'
    }
    return string;
}

let obj = {
    0: [1, 2, 3, 4, 5, 6],
    1: [7, 8, { 0: 'hello' }],
    2: {
        0: { 0: 'data' }
    },
    3: 'x'
};

let result = stringify(obj)
console.log(typeof result, result);