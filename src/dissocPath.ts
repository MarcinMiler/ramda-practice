import * as R from 'ramda'

console.log(
    R.dissocPath(['a', 'b', 'c'], { a: { b: { c: 1 } }, d: 2 }), // { a: { b: {}}, d: 2 }
)
