let numbers = Array.from(new Set(arr))
return Number(numbers.sort().map(n=>arr.filter(a=>a===n).length).join(''))