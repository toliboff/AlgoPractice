function dayOfProgrammer(year) {
  let day;
  const isLeap = (year) => {
      return (year%400 ===0) || (year % 4 === 0 && year % 100 !== 0) ;
  } 
  
  if(year === 1918){
      // -13
       day =   isLeap(year)? 256-244+13:256-243+13
  }
  else if(year < 1918) {
    day =  year%4 === 0 ? 256-244:256-243
  }
  else {
      day =  isLeap(year)? 256-244:256-243
  }
  return `${day}.09.${year}`
}

console.log(dayOfProgrammer(2016));