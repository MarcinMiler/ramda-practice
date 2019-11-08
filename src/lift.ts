import * as R from 'ramda'

const madd2 = R.lift((a, b, c) => a + b + c)

console.log(
    madd2([1, 2], [1, 2], [1, 2]), // [ 3, 4, 4, 5, 4, 5, 5, 6 ]
)
