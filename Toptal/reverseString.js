box.reverseString = function reverseString(x) {
  // x is a string
  // return a string
  // (ex. x="Hello from Toptal", you should return "latpoT morf olleH")
  return x.split(' ').map(a=>a.split('').reverse().join('')).reverse().join(' ')
};