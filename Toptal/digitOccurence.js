box.digitOccurrence = function digitOccurrence(n, x) {
  // n is an integer, x is a single-digit number
  // return a number
  // (ex. n=11, x=1, it should return 4 because ‘1’ appears up 4 times between 0 and 11)
  let numbers = '';
  while(n>=0){
    numbers+=n;
    n--
  }
  return numbers.split``.filter(a=>a==x).length;
};
  
