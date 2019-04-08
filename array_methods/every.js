'use strict';
// re-create Array.prototype.every

Array.prototype.every = function (func, thisValue) {
    let array = this;
    // this = thisValue || this; //not able to re-assign this for some reason
    let passing = true;
    for (let index = 0; index < array.length; index++) {
        let item = this[index];
        passing = func(item, index, array);
        if (!passing) return false;
    }
    return passing;
}

console.log([2, 4, 6, 3].every((item, index, array) => {
    return !(item % 2);
}));