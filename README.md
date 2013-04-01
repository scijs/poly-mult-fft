poly-mult-fft
=============
Multiplies two polynomials together using an FFT.

Use
===
First install

    npm install poly-mult-fft
    
Then use as follows:

```javascript
var mult = require("poly-mult-fft")

//Compute:
//
//    (1 + 2*x) * (1 + x^2)
//
console.log(mult([1, 2], [1, 0, 1]))
//Prints:
//
//  [1, 2, 1, 2]
//

//Also supports complex numbers.  For example, compute:
//
//    (i + (1+3i)*x) * (2 + 5i * x^2)
//
console.log(mult( [[0, 1], [1, 3]],
                  [[2, 0, 0], [0, 0, 5]] ))
//Prints:
//
//    [[0, 2, 5, 15],
//     [2, 6, 0, 5]]
//
```

### `require("poly-mult-fft")(a, b)`
Multiplies two polynomials together.

* `a` is the first polynomial
* `b` is the second polynomial

Supports both real and complex valued polynomials.  To handle complex data, you should pass in a pair of coefficients

**Returns:** The product of the two polynomials

**Time Complexity:** `O((a.length + b.length) * log(a.length + b.length))`

Credits
=======
(c) 2013 Mikola Lysenko. MIT License