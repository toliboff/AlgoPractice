function breakingRecords(scores) {
  let highest = 0;
  let lowest = 0;
  let h=scores[0];
  let l=scores[0];
  for (let i = 1; i< scores.length; i++) {
      if(scores[i]>h){
          h=scores[i];
          highest++
      }
       if(scores[i]<l){
          l=scores[i];
         lowest++
      }
  }
  return [highest, lowest];

}

const score=[3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
console.log(breakingRecords(score));// [4, 0]