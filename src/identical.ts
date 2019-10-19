import * as R from 'ramda'

const o = {}

const l: [] = []

console.log(
    R.identical(o, o), // true
    R.identical(o, {}), // false
    R.identical(l, l), // true
    R.identical(l, []), // false
    R.identical(1, 1), // true
)
