import * as R from 'ramda'

const lte3 = R.lte(R.__, 3)

console.log(
    R.dropWhile(lte3, [1, 2, 3, 4, 3, 2, 1]), // [4, 3, 2, 1]
)
