function countingValleys(steps, path) {
  // Write your code here
  let valleys = 0;
  let step=0;
  let down=false;
  let p = path.split('');
  for(let i=0;i<steps;i++){
      if(p[i]=='D'){
          step--;
          down=true;
      } else {
          step++;
          if(step==0 && down==true){
              valleys++;
              down=false
      }
  }
  }   
  return valleys
}

countingValleys(8, 'DDUUUUDD'); // => 1