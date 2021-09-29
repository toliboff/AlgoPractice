let arr=x.split('');
for(let i=0; i<x.length;i++){
  if(arr.filter(a=>a===arr[i]).length===1)return arr[i]
}
return false
