// box.averageAsciiChar = function averageAsciiChar(x) {
//   // x is a string
//   // return a character
//   // (ex. x="Hello World!", you should return "Z")
  
// };

// SOLUTION:
function averageAsciiChar(x) {
  let avg=x.split('').map(l=>l.charCodeAt()).reduce((a,b)=>a+b)/x.length
  return String.fromCharCode(Math.round(avg))
};
