
// Recreate Array.map functionality:

Array.prototype.map = function (func) {
    let arr = [...this];
    for (let index = 0; index < arr.length; index++) {
        let item = arr[index];
        arr[index] = func(item, index);
    }
    return arr;
}

let result = [1, 2, 3, 4, 5, 6]
    .map((item, index) => {
        return item * 2;
    })

console.log('result:', result);