box.hexToRGB = function hexToRGB(x) {
  // x is a string
  // return an array
  // (ex. x="#FFFFFF", you should return [255, 255, 255])
  let hex=[x.slice(1,3), x.slice(3,5), x.slice(5)];
return hex.map(h=>parseInt(h, 16))

};

