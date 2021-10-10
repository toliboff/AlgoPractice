box.isRotatedStr = function isRotatedStr(x, y) {
  // x and y are strings;
  // return boolean
  // (ex. x="vwxyz", y="xyzvw", you should return true because we when shifting v and w to the rightmost
  // it will match y)
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

};
