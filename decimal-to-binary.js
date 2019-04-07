// convert a decimal num to a binary

const decimalToBinary = (decimal, base = 2) => {
    const originalDecimal = decimal;
    let digitsStored = 0;
    let binaryString = ''
    let numIllustration = {};
    // place always starts at ones place:
    let place = 1;
    let placeValue;
    let unitsToStoreInCurrentPlace;
    while (digitsStored < originalDecimal) {
        /* the number of digits that you will store will be the digits that have not been stored yet % the next-higher place that will be coming up.
        for example, if you have 130 units to store, and you are currently looping over the 10's place, you will do 130 % 100 --> there will be 30 units to store in the 10's place */
        unitsToStoreInCurrentPlace = decimal % (place * base);
        placeValue = unitsToStoreInCurrentPlace / place;
        decimal -= unitsToStoreInCurrentPlace;
        binaryString += placeValue;
        numIllustration[place] = placeValue;
        // console.log('place', place, 'unitsToStoreInCurrentPlace', unitsToStoreInCurrentPlace, 'placeValue', placeValue, 'decimal', decimal, 'binaryString', binaryString);
        digitsStored += unitsToStoreInCurrentPlace;
        place *= base;
    }
    return {
        'base': base,
        [`base ${base} number`]: binaryString.split('').reverse().join(''), //reverse the binary string, to have it display correctly
        'places illustration': numIllustration
    }
};


console.log('10 % 4', 10 % 4);


console.log(decimalToBinary(22));