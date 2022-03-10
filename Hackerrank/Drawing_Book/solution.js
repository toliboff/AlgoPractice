/*
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  // Write your code here
  if(p===1 || p===n) return 0
  
  let end = (n-p===1 && n%2===0)?1:Math.floor((n-p)/2);
  let start = Math.floor(p/2);
  return end>start? start : end;

}

console.log(pageCount(6,5))