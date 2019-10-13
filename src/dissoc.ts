import * as R from 'ramda'

console.log(
    R.dissoc('b', { a: 1, b: 2, c: 3 }), // { a: 1, c: 3 }
)
