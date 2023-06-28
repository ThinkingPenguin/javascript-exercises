const fibonacci = function(numb) {
    let numbOne = 0;
    let numbTwo = 1;
    let sum = 0;
    let arrayFib = [];
    if (numb < 0) {
        return "OOPS";
    }

    for (let i = 0; i <= numb; i++) {
        if (i == 0) {
            arrayFib.push(1);
        }
        sum = numbOne + numbTwo;
        arrayFib.push(sum);
        numbOne = numbTwo;
        numbTwo = sum;
    }
    return arrayFib[numb-1];

};

// Do not edit below this line
module.exports = fibonacci;
