box.isPrime = function isPrime(x) {
      // x is a number
      // return boolean
      // (ex. x=11, you should return true because 11 is a prime number)
      if (x <= 1)
      return false;

   for (let i = 2; i < x; i++){
    if (x % i == 0)
          return false;
        }
 return true;

    };
