import * as R from 'ramda'

const gte10 = R.gte(R.__, 20)
const lte15 = R.lte(R.__, 15)

console.log(
    R.anyPass([gte10, lte15])(21), // true
    R.anyPass([gte10, lte15])(17), // false
)
