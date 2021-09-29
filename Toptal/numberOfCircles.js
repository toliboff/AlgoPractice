x=Math.abs(x)
  circles={
    0:1,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:1,
    7:0,
    8:2,
    9:1,
  }
  return String(x).split('').map(n=>circles[n]).reduce((a,b)=>a+b)