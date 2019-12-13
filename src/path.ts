import * as R from 'ramda'

console.log(
    R.path(['a', 'b'], { a: { b: 1 } }), // 1
    R.path(['a', 'b', 'c'], { a: { b: 1 } }), // undefined
)
