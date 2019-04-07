
// VERSION ONE:
let isPalindrome = (word) => {
    for (let i = 0, k = word.length - 1; i < (word.length - 1) / 2; i++ , k--) {
        let frontLetter = word[i];
        let backLetter = word[k];
        if (frontLetter !== backLetter) return false;
    }
    return true;
}

// VERSION TWO:
// let isPalindrome = (word) => {
//     let lengthIsOdd = word.length % 2;
//     let midPoint = word.length / 2;
//     let firstHalf
//     let secondHalf
//     if (lengthIsOdd) {
//         firstHalf = word.slice(0, midPoint - 0.5);
//         secondHalf = word.slice(midPoint + 0.5);
//     } else {
//         firstHalf = word.slice(0, midPoint);
//         secondHalf = word.slice(midPoint);
//     }
//     secondHalf = secondHalf.split('').reverse().join('');
//     return firstHalf === secondHalf;
// }



console.log('Are these words palindromes?');
console.log('ocean:', isPalindrome('ocean'));
console.log('abba:', isPalindrome('abba'));
console.log('ab0ba:', isPalindrome('ab0ba'));