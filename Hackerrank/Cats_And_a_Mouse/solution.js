// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  return Math.abs(z-x)<Math.abs(z-y)?'Cat A':Math.abs(z-x)>Math.abs(z-y)?'Cat B':'Mouse C'
}


console.log(catAndMouse(1, 2, 3));//should return Cat B
console.log(catAndMouse(1, 3, 2));//should return Mouse C
