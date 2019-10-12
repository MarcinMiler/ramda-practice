import * as R from 'ramda'

const sum = (...args: number[]) => R.sum(args)

const curry4 = R.curryN(4, sum)

console.log(
    curry4(1)(2)(3)(4), // 12
)
