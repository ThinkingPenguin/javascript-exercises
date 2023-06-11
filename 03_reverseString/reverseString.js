const reverseString = function(string) {
    let charArray = string.split('');
    let reverse = ''
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += charArray[i];
        
    }
    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
