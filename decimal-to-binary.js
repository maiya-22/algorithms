/*  Convert any base ten whole number to any other base.
    Default, converts to binary.
*/

const decimalToBinary = (decimal, base = 2) => {
    const originalDecimal = decimal;
    let digitsStored = 0;
    let resultString = ''
    let numIllustration = {};
    // place always starts at ones place:
    let place = 1;
    let placeValue;
    let unitsToStoreInCurrentPlace;
    let count = 0; //used only if the base is one, in order to differentiate between all of the ones places in the numIllustration.
    while (digitsStored < originalDecimal) {
        if (base !== 1) {
            /* the number of digits that you will store will be the digits that have not been stored yet % the next-higher place that will be coming up.
        for example, if you have 130 units to store, and you are currently looping over the 10's place, you will do 130 % 100 --> there will be 30 units to store in the 10's place */
            unitsToStoreInCurrentPlace = decimal % (place * base);
            // example, if there are 30 units to store in the tens place, the placeValue will be 3
            placeValue = unitsToStoreInCurrentPlace / place;
            decimal -= unitsToStoreInCurrentPlace;
            resultString += placeValue;
            numIllustration[place] = placeValue;
            // uncomment the console log to easily see the math:
            // console.log('place', place, 'unitsToStoreInCurrentPlace', unitsToStoreInCurrentPlace, 'placeValue', placeValue, 'decimal', decimal, 'binaryString', binaryString);
            digitsStored += unitsToStoreInCurrentPlace;
            place *= base;
        } else {
            // if the base is one, it's basically just the number of ones in the number, for example 11 would be eleven ones drawn out.
            unitsToStoreInCurrentPlace = 1;
            placeValue = 1;
            decimal -= 1;
            digitsStored += 1;
            resultString += String(1);
            numIllustration[`${place} - ${count}`] = placeValue;
            count += 1;
        }
    }
    return {
        'base': base,
        [`base ${base} number`]: resultString.split('').reverse().join(''), //reverse the binary string, to have it display correctly
        'places illustration': numIllustration
    }
};


console.log(decimalToBinary(201));