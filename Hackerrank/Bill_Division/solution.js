function bonAppetit(bill, k, b) {
  // Write your code here
  let total = bill.filter((a, index)=>index!=k).reduce((a,b)=>a+b);
  console.log(total/2 == b ? 'Bon Appetit': b-total/2)
}

bonAppetit([3, 10, 2, 9], 1, 12);