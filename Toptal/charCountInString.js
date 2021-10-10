box.charCountInString = function charCountInString(x, y) {
  // x is a string of 1 character
  // y is a string
  // return a number
  // (ex. x='$', y="$he$llo$$$wo$rld", should return 6),
  return y.split('').filter(a=>a===x).length
}

