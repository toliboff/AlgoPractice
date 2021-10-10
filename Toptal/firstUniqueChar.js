box.firstUniqueChar = function firstUniqueChar(x) {
  // x is a string
  // return a string
  // (ex. x="toptal", you should return "o" because "t" appeared twice)
   let arr=x.split('');
  for(let i=0; i<x.length;i++){
    if(arr.filter(a=>a===arr[i]).length===1)return arr[i]
  }
  return false
};
 
