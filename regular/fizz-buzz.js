const fizzBuzz = (num) => {
    let count = 1;
    while (count <= num) {
        let statement = '';
        statement += count % 3 ? '' : 'fizz';
        statement += count % 5 ? '' : 'buzz';
        statement = statement ? statement : String(count);
        console.log(statement);
        count += 1;
    }
}

fizzBuzz(25);