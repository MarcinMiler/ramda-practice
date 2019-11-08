import * as R from 'ramda'

const madd3 = R.liftN(3, (...args) => R.sum(args))

console.log(
    madd3([1, 2, 3], [1, 2, 3], [1]), // [3, 4, 5, 4, 5, 6, 5, 6, 7]
)
