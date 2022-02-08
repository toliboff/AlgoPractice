/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  let socks = Array.from(new Set(ar));
  let pairs = socks.map(sock=>Math.floor((ar.filter(a=>a==sock).length)/2)).reduce((a,b)=>a+b)
  return pairs;
}


let solution = sockMerchant(9, [10,20, 20, 10, 10, 30, 50, 10, 20]);
console.log(solution);