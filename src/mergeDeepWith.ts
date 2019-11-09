import * as R from 'ramda'

console.log(
    R.mergeDeepWith(
        R.concat,
        { a: true, c: { values: [1, 2, 3] } },
        { b: true, c: { values: [4, 5, 6] } },
    ), // { a: true, b: true, values: [1, 2, 3, 4, 5, 6] }
)
