box.findAverage = function findAverage(x) {
  // x is an array of numbers
  // return a number
  // (ex. x=[1,2,3,4] then you should return 4 because the average is 3.25)
  return Math.ceil(x.reduce((a,b)=>a+b)/x.length)
};
