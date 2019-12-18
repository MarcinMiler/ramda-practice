import * as R from 'ramda'

const pickGt10 = (val: number, key: string) => R.gt(val, 10)

console.log(
    R.pickBy(pickGt10, { a: 1, b: 5, c: 11 }), // { c: 11 }
)
