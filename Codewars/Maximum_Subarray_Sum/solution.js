const maxSequence = function(arr){
  const collection = [];
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++){
      collection.push(arr.slice(j, j+i+1))
     }
  }
  return Math.max(...collection.map(col => col.reduce((a,b) => a + b)));
}

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSequence(numbers));