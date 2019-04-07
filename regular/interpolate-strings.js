/*  interpolate an unknown number of strings,
    each of unknown length
*/

// VERSION ONE:

function interpolateStrings() {
    // use Array.join to access the lengths of all of the arguments. subtract the number of commas that is in the string:
    let allStringsLength = Array.prototype.join.call(arguments).length - arguments.length - 1;
    let interpolatedString = '';
    let index = 0;
    while (interpolatedString.length < allStringsLength) {
        for (let i = 0; i < arguments.length; i++) {
            let word = arguments[i];
            let letter = word[index];
            if (letter) {
                interpolatedString += letter;
            }
        }
        index += 1;
    }
    return interpolatedString;
}


// VERSION TWO:

// function interpolateStrings() {
//     const places = {};
//     let interpolatedString = '';
//     for (let string in arguments) {
//         let currentString = arguments[string];
//         for (let i = 0; i < currentString.length - 1; i++) {
//             let place = i;
//             let letter = currentString[i];
//             places[place] = places[place] ? places[place] += letter : letter;
//         }
//     }
//     for (let i = 0; i < Object.keys(places).length; i++) {
//         interpolatedString += places[i];
//     }
//     return interpolatedString
// }


console.log(interpolateStrings('1234', '****', '####', 'lalalalalalalalalalalala'));