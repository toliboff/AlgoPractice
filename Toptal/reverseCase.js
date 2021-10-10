// box.reverseCase = 
function reverseCase(x) {
  // x is a string
  // return a string
  // (ex. str="Toptal" you should return "tOPTAL")
  return x.split('').map(str=>str===str.toLowerCase()?str.toUpperCase():str.toLowerCase()).join('')
};

console.log(reverseCase('Toptal'));