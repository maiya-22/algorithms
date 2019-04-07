// rewrite the JSON.stringify functinality


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
            if (itemType === 'primitive') {
                string += item;
            } else {
                string += stringify(item);
            }
            if (i != data.length - 1) string += ', '
        }
        string += ` ]`
    } else if (type === 'object') {
        string += '{ '
        for (let key in obj) {
            let item = obj[key];
            let itemType = checkType(item);
            string += `${key} :`
            if (itemType === 'primitive') {
                string += item;
            } else {
                string += stringify(item);
            }
        }
        string += ' }'
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

console.log(stringify(obj));