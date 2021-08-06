function getTotalX(a, b) {
  const maxA = Math.max(...a);
  const minB = Math.min(...b);
  let numbers=[];
  for (let i=maxA; i <=minB; i++){
      if(a.every(num=>i%num==0)) numbers.push(i);
  }

  return numbers.filter(a=>b.every(bNum=>bNum%a==0)).length;
}

const a = [2, 4];
const b = [16, 32, 96];

console.log(getTotalX(a, b));