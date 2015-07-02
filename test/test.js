var mult = require("../multiply.js")
var fuzz = require("test-fuzzy-array")

require("tape")("multiply", function(t) {
  var almostEqual = fuzz(t, 0.0000001) // Fairly arbitrary epsilon
  
  almostEqual(mult([1,2], [1, 0, 1]),
              [1,2,1,2],
              "Real polynomial, no overlap")

  var result = mult([[0, 1], [1, 3]],
                   [[2, 0, 0], [0, 0, 5]])
  almostEqual(result[0], [0,2,-5,-15],
              "Complex polynomial, no overlap (R)")
  almostEqual(result[1], [2,6,0,5],
              "Complex polynomial, no overlap (I)")
  
  almostEqual(mult([2,3,5], [1, 0, 1]),
              [2,3,7,3,5],
              "Real polynomial, overlap")
  
  t.end()
})