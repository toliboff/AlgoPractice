/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  let result=[];
  for (let i=1; i<=s.length;i++){
    for (let j=0; j<s.length;j+=i){
    result.push(`${j}-${j+i}:${s.slice(j, i+j)}`)
    }
  }
  return result//.length;
};

console.log(countSubstrings('abcd'));

// a b c 
// 0-1, 1-2,