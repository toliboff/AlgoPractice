function arrayToObject(x) {
  // x is an array
  // return an object
  // (ex. x=[["key", "value"], ["numb", 123], ["bool", true]], you should return {"key": "value", "bool": true, "numb": 123})
  const obj = {};x.forEach(element => { obj[element[0]]=element[1] }); return obj;
};

console.log(arrayToObject([["key", "value"], ["numb", 123], ["bool", true]]));