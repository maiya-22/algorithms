// re-create Array.reduce functionality

// VERSION ONE: simple function

// const reduce = (arr, func, combinator) => {
//     combinator = combinator ? combinator : 0;
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         let index = i;
//         combinator = func(item, combinator, index);
//     }
//     return combinator;
// }

// let result = reduce(
//     arr,
//     (item, combinator, index) => {
//         combinator[item] = true;
//         return combinator;
//     },
//     {});

// console.log('result:', result);


// VERSION TWO: put on the Array.prototype:

Array.prototype.reduce = function (func, combinator) {
    combinator = combinator ? combinator : 0;
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let index = i;
        combinator = func(item, combinator, index);
    }
    return combinator;
}

console.log('result:',
    [1, 2, 3, 4, 5, 6]
        .reduce((item, combinator, index) => {
            combinator[item] = true;
            return combinator;
        },
            {}));