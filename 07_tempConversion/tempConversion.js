const convertToCelsius = function(fahrenheit) {
  let degreeFahr = (fahrenheit - 32) * 5/9;
  return Math.round(degreeFahr*10)/10;
};

const convertToFahrenheit = function(celsius) {
  let degreeCelc = (celsius*9/5) + 32;
  return Math.round(degreeCelc*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
