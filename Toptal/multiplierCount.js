box.multiplierCount = function multiplierCount(x, y) {
  // x and y are numbers
  // return a number
  // (ex. x=10, y=5, you should return 2)
  // (ex. x=11, y=2, you should return 5)
  t=0;for(let i=1; i*y<=x; i++) {t++};return t;
};
