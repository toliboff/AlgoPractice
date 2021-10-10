box.numberRepresentation = function numberRepresentation(arr) {
  // arr is an array
  // return a number
  // (ex. arr=[b,a,a,a,c,b,a] you should return 421 where 4 represents 'a' occurences, 2 for 'b', etc..) 
  let numbers = Array.from(new Set(arr));return Number(numbers.sort().map(n=>arr.filter(a=>a===n).length).join(''))
}
