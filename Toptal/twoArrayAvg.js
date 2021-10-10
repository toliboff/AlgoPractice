box.twoArrayAvg = function twoArrayAvg(x, y) {
  // x and y are arrays of numbers
  // return a number
  // (ex. x=[1,2,3],  y=[4,5,6], you should return 3.5)
  return ((x.reduce((a,b)=>a+b)/x.length)+(y.reduce((a,b)=>a+b)/y.length))/2;
};

