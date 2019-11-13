import * as R from 'ramda'

console.log(
    R.omit(['a', 'b'], { a: 1, b: 2, c: 3 }), // { c: 3 }
)
