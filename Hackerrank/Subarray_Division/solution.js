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
  let result = [];
  for (let i=0; i<s.length; i++) {
     result.push(s.slice(i, i+m));
  }
 
  return result.filter(a=>a.length===m).map(a=>a.reduce((b,c)=>b+c)).filter(a=>a===d).length;
}

const chocoArray = [1,1,1,1,1,1];
const day = 3;
const month = 2;

console.log(birthday(chocoArray, day, month));
