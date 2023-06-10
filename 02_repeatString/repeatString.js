const repeatString = function(word, time) {
    if (time < 0) {
        return "ERROR";
    };
    let mot = "";
    for (let i = 0; i < time; i++) {
        mot += word;
    }
    return mot;

};

// Do not edit below this line
module.exports = repeatString;
