function twoArrayAvg(x,y){
  return x.reduce((a,b)=>a+b)/x.length + y.reduce((a,b)=>a+b)/y.length
}

console.log(twoArrayAvg( [1,2,3,6],[3,2,5,5,10] ) );

// twoArrayAvg( [1,2,3,6],[3,2,5,5,10] ) = 8expected: 4

// twoArrayAvg( [1],[9] ) = 10expected: 5

// twoArrayAvg( [1,2,6],[11] ) = 14expected: 7

// twoArrayAvg( [6,4,0,6],[3,5,10] ) = 10expected: 5

// twoArrayAvg( [54,12,23,43,49,14,73,32,35],[22,48,84,37,38,15] ) = 77.88888888888889expected: 38.94444444444444

// twoArrayAvg( [62,43,9],[83,41,45,94,82,30,57,72] ) = 101expected: 50.5

// twoArrayAvg( [38,17,67,28,99,1,64],[90,15] ) = 97.35714285714286expected: 48.67857142857143