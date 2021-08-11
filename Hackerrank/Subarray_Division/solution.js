/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  // Write your code here
  let result = 0;
  for (let i=0; i<s.length; i++) {
      if (s.slice(i,m).reduce((a,b) => a+b)===d)result++
  }
  return result;
}
