const removeFromArray = function(array, ...theArgs) {
    for (let i = 0; i < theArgs.length; i++) {
        const arrayIndex = array.indexOf(theArgs[i]);
        if (array.includes(theArgs[i])) {
            array.splice(arrayIndex, 1);
        }
        
    }
    
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
