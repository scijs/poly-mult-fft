"use strict"

var numeric = require("numeric")

function isComplex(a) {
  if(a.length > 0 && typeof(a[0]) !== "number") {
    return true
  }
  return false
}

function multiplyPolys(a, b) {
  var ar, ai, br, bi, cplx = false
  if(isComplex(a)) {
    ar = a[0]
    ai = a[1]
    cplx = true
  } else {
    ar = a
    ai = numeric.rep([a.length], 0.0)
  }
  if(isComplex(b)) {
    br = b[0]
    bi = b[1]
    cplx = true
  } else {
    br = b
    bi = numeric.rep([b.length], 0.0)
  }
  
  var AN = ar.length
  var BN = br.length
  var RN = AN + BN - 1
  
  var cr = numeric.rep([RN], 0.0)
  var ci = numeric.rep([RN], 0.0)
  for(var i=0; i<AN; ++i) {
    cr[i] = ar[i]
    ci[i] = ai[i]
  }
  
  var dr = numeric.rep([RN], 0.0)
  var di = numeric.rep([RN], 0.0)
  for(var i=0; i<BN; ++i) {
    dr[i] = br[i]
    di[i] = bi[i]
  }

  //Multiply using fft
  var result = (new numeric.T(cr, ci)).fft().mul((new numeric.T(dr, di)).fft().conj()).ifft()
  if(cplx) {
    return [ result.x, result.y ]
  }
  return result.x
}

module.exports = multiplyPolys