import * as R from 'ramda'

const isEven = (x: number) => x % 2 === 0
const isOdd = R.complement(isEven)

console.log(
    R.none(isEven, [1, 3, 5, 7, 9]), // true
    R.none(isOdd, [1, 3, 5, 7, 9]), // false
)
