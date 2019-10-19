import * as R from 'ramda'

const o = {}

console.log(
    R.identity(1), // 1
    R.identity(o) === o, // true
)
