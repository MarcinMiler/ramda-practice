import * as R from 'ramda'

const lte10 = (x: number) => x <= 3

console.log(
    R.dropLastWhile(lte10, [1, 2, 3, 4, 3, 2, 1]), // [1, 2, 3, 4]
)
