// Recreate Array.filter function

Array.prototype.filter = function (func) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        let item = this[i];
        if (func(item)) {
            arr.push(item)
        }
    }
    return arr;
}

let result = [1, 2, 3, 4, 5, 6].filter((item) => {
    return item % 2;
});

console.log('result:', result);