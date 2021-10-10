// box.isPalindrome = 
function isPalindrome(x) {
  // x is a string
  // return boolean
  // (ex. x="Pull up!", you should return true)
  let cleaned = x.replace(/[^A-Za-z0-9]/ig, ''); return cleaned.toLowerCase()===cleaned.toLowerCase().split('').reverse().join('')
};

console.log(isPalindrome("Pdull up!"));
