poly-mult-fft
=============
Multiplies two polynomials together using an FFT.

[![build status](https://secure.travis-ci.org/scijs/poly-mult-fft.png)](http://travis-ci.org/scijs/poly-mult-fft)

# Example
## Real polynomial
Compute `(1 + 2*x) * (1 + x^2)`:
```javascript
var mult = require("poly-mult-fft")
console.log(mult([1, 2], [1, 0, 1]))
```
### Output
```
[1, 2, 1, 2]
```
## Complex polynomial
Compute `(i + (1+3i)*x) * (2 + 5i * x^2)`:
```javascript
var mult = require("poly-mult-fft")
console.log(mult( [[0, 1], [1, 3]],
                  [[2, 0, 0], [0, 0, 5]] ))
```
### Output
```
[[0, 2, 5, 15],
 [2, 6, 0, 5]]
```

# Install
Install using [npm](https://www.npmjs.com/):

    npm install poly-mult-fft

# API
#### `require("poly-mult-fft")(a, b)`
Multiplies two polynomials together.

* `a` is the first polynomial
* `b` is the second polynomial

Supports both real and complex valued polynomials.  To handle complex data, you should pass in a pair of coefficients

**Returns:** The product of the two polynomials

**Time Complexity:** `O((a.length + b.length) * log(a.length + b.length))`

# License
(c) 2013 Mikola Lysenko. MIT License