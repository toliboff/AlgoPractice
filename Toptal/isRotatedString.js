if(x.length!==y.length){
    return false
  }
if(x===y){
  return true
}
  let rotated = x.split('');
  for (let i=0; i<x.length; i++){
    rotated.push(rotated.shift())
    if(rotated.join('')===y){
      return true
    }
  }
  return false
