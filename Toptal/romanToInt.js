box.romanToInt = function romanToInt(x) {
  // x is a string; roman numeral
  // return a number
  // (ex. x="IV", you should return 4)
   var myMap = new Map();myMap.set('I', 1);myMap.set('V', 5);myMap.set('X', 10);myMap.set('L', 50);myMap.set('C', 100);myMap.set('D', 500);myMap.set('M', 1000);let result = 0, current, previous = 0;for (const char of x.split("").reverse()) {current = myMap.get(char);if (current >= previous) {result += current;} else {result -= current;}previous = current;}return result;

};
 