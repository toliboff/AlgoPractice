const twoArrayAvg = require('./Toptal/twoArrayAvg')
const assert = require('assert')

describe('Tests', function () {
  it('twoArrayAvg( [1,2,3,6],[3,2,5,5,10])', function () {
    assert(twoArrayAvg( [1,2,3,6],[3,2,5,5,10]) === 4)
  })

  it('twoArrayAvg( [1],[9] ) ', function () {
    assert(twoArrayAvg( [1],[9] ) === 5)
  })

  it('twoArrayAvg( [1,2,6],[11] )', function () {
    assert(stwoArrayAvg( [1,2,6],[11] ) === 7)
  })

  it('twoArrayAvg( [6,4,0,6],[3,5,10] )', function () {
    assert(twoArrayAvg( [6,4,0,6],[3,5,10] ) === 5)
  })
  it('twoArrayAvg( [54,12,23,43,49,14,73,32,35],[22,48,84,37,38,15] )', function () {
    assert(twoArrayAvg( [54,12,23,43,49,14,73,32,35],[22,48,84,37,38,15] ) === 38.94444444444444)
  })
  it('twoArrayAvg( [62,43,9],[83,41,45,94,82,30,57,72] )', function () {
    assert(twoArrayAvg( [62,43,9],[83,41,45,94,82,30,57,72] ) === 50.5)
  })
  it('twoArrayAvg( [38,17,67,28,99,1,64],[90,15] )', function () {
    assert(twoArrayAvg( [38,17,67,28,99,1,64],[90,15] ) === 48.67857142857143)
  })
})
