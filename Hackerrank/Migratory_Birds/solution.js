function migratoryBirds(arr) {
  // Write your code here
  let uniq = Array.from(new Set(arr))
  let max =1;
  uniq.forEach(num => arr.filter(a=>a==num).length>max?            max=arr.filter(a=>a==num).length : null)
  let filtered = uniq.filter(a=>arr.filter(b=>b==a).length==max)
 return  Math.min(...filtered)

}

const birds=[1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(birds));