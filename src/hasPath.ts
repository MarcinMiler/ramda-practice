import * as R from 'ramda'

console.log(
    R.hasPath(['a', 'b'], { a: { b: 1 } }), // true
    R.hasPath(['a', 'b', 'c'], { a: { b: { c: 1 } } }), // true
)
