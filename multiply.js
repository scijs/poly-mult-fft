"use strict"

var ndarray = require("ndarray")
var ops = require("ndarray-ops")
var cops = require("ndarray-complex")
var fft = require("ndarray-fft")

function isComplex(a) {
  if(a.length > 0 && typeof(a[0]) !== "number") {
    return true
  }
  return false
}

function multiplyPolys(a, b) {
  var ar, ai, br, bi, cplx = false
  if(isComplex(a)) {
    ar = ndarray(a[0])
    ai = ndarray(a[1])
    cplx = true
  } else {
    ar = ndarray(a)
    ai = ndarray(new Array(a.length))
    ops.assigns(ai, 0.0)
  }
  if(isComplex(b)) {
    br = ndarray(b[0])
    bi = ndarray(b[1])
    cplx = true
  } else {
    br = ndarray(b)
    bi = ndarray(new Array(b.length))
    ops.assigns(bi, 0.0)
  }
  
  var AN = ar.shape[0]
  var BN = br.shape[0]
  var RN = AN + BN - 1
  
  var cr = ndarray(new Array(RN))
  var ci = ndarray(new Array(RN))
  ops.assign(cr.hi(AN), ar)
  ops.assigns(cr.lo(AN), 0.0)
  ops.assign(ci.hi(AN), ai)
  ops.assigns(ci.lo(AN), 0.0)
  
  var dr = ndarray(new Array(RN))
  var di = ndarray(new Array(RN))
  ops.assign(dr.hi(BN), br)
  ops.assigns(dr.lo(BN), 0.0)
  ops.assign(di.hi(BN), bi)
  ops.assigns(di.lo(BN), 0.0)

  //Multiply using fft
  fft(1, cr, ci)
  fft(1, dr, di)
  cops.muleq(cr, ci, dr, di)
  fft(-1, cr, ci)
  if(cplx) {
    return [ cr.data, ci.data ]
  }
  return cr.data
}

module.exports = multiplyPolys