function validateIP(x) {
  // x is a string in the format of "X.X.X.X"
  // return boolean
  // (ex. x="127.0.0.1", you should return true)
  // (ex. x="555.123.123.1". you should return false because first part is greater than 255)
  let arr= x.split('.'); return (arr.length===4 && !(arr.some(num=>num.length===0 || num>255 || num<0)) && (arr.every(num=>num.replace(/\D/g,'').length==num.length)))

};
  console.log("1.2.3.0x1".replace(/\D/g, ""));
console.log(validateIP("1.2.3.0x1"));
// validateIP( "192.168.0.1" ) = true

// validateIP( "0.0.0.0" ) = true

// validateIP( "192.168.123.456" ) = false

// validateIP( "1.2.3.4.5" ) = false

// validateIP( "1..23.4" ) = false

// validateIP( "123.256.34.56" ) = false

// validateIP( ".254.255.0" ) = false

// validateIP( "1.2.3.0x1" ) = trueexpected: false

// validateIP( "12.25.32.ip" ) = trueexpected: false

// validateIP( "209.50.5.146" ) = true

// validateIP( "224.232.242.407" ) = false

// validateIP( "118.248.1d2.95" ) = trueexpected: false