// Recreate Array.forEach function functionality

Array.prototype.forEach = function (func) {
    for (let index = 0; index < this.length; index++) {
        let item = this[index];
        func(item, index)
    }
}

let result = [1, 2, 3, 4, 5, 6].forEach((item) => {
    console.log('item', item);
});

