import * as R from 'ramda'

console.log(
    R.pick(['a', 'b', 'c'])({ a: 1, b: 2, c: 3, d: 4, e: 5 }), // { a: 1, b: 2, c: 3 }
)
