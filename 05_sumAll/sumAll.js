const sumAll = function(startNum, lastNum) {
    let total = 0;
    if (typeof startNum !== 'number' || typeof lastNum !== 'number') {
        return 'ERROR';   
    }
    if (startNum < 0 || lastNum < 0) return 'ERROR';

    if (startNum > lastNum) {
        for (let i = lastNum; i <= startNum ; i++) {
            total += i;      
        }
        return total
        
    } else {
        for (let i = startNum; i <= lastNum; i++) {
        total += i;
    }
    return total;
        
    }
    

};

// Do not edit below this line
module.exports = sumAll;
