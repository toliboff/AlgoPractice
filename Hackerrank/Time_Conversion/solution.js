function timeConversion(s) {
  let timeType = s.slice(8);
  let timeArr = s.split(':').map((a) => a.replace(/[a-z]/gi, ''));
  if (timeType==='PM') {
    timeArr[0]=(+ timeArr[0] + 12)===24 ? '12' : (+ timeArr[0] + 12);
  }
  if (timeType==='AM' &&  timeArr[0]==12) {
    timeArr[0]='00'
  }
  return timeArr.join(':');  
      
}

const time='12:45:54PM';
console.log(timeConversion(time));