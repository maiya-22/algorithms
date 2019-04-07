// re-create Array.reduce functionality

const reduce = (arr, func, combinator) => {
    combinator = combinator ? combinator : 0;
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let index = i;
        combinator = func(item, combinator, index);
    }
    return combinator;
}

let result = reduce(arr, (item, combinator, index) => {
    combinator[item] = true;
    return combinator;
}, {});

console.log('result:', result);