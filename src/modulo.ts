import * as R from 'ramda'

const isOdd = R.modulo(R.__, 2)

console.log(
    isOdd(10), // 0
    isOdd(11), // 1
)
