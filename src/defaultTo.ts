import * as R from 'ramda'

const defaultTo1 = R.defaultTo(1)

console.log(
    defaultTo1(null), // 1
    defaultTo1(2), // 2
)
