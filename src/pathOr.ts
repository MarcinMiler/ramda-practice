import * as R from 'ramda'

console.log(
    R.pathOr(2, ['a', 'b'])({ a: null }), // 2
)
