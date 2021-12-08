/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
  let result = 0;
  
  for (let i=0; i<n; i++){
      result+=ar.slice(i+1).filter(num=>(num+ar[i])%k==0).length;
  }
  return result;
}