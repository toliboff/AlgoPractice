function removeDuplicates(x) {
  // x is a string
  // return a string
  // (ex. x="hello world", you should return "helo wrd")
  return Array.from(new Set(x.split(''))).join('')
};

console.log(removeDuplicates("hello world"));