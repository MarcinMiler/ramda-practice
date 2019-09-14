import * as R from 'ramda'

const gte10 = R.gte(R.__, 10)
const lte20 = R.lte(R.__, 20)

console.log(R.allPass([gte10, lte20])(15)) // true

console.log(R.allPass([gte10, lte20])(5)) // false
