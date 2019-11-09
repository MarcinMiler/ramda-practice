import * as R from 'ramda'

console.log(
    R.mergeWith(R.concat, { a: true, values: [1, 2, 3] }, { b: true, values: [4, 5, 6] }), // { a: true, b: true, values: [1, 2, 3, 4, 5, 6] }
)
