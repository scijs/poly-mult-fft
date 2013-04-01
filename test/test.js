var mult = require("../multiply.js")

require("tap").test("multiply", function(t) {
  console.log(mult([1,2], [1, 0, 1]))
  console.log(mult( [[0, 1], [1, 3]],
                  [[2, 0, 0], [0, 0, 5]] ))
  
  t.end()
})