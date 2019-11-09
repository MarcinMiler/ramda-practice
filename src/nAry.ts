import * as R from 'ramda'

const pair = (a: number, b: number) => [a, b]

console.log(
    R.nAry(1, pair)(1), // [1, undefined]
)
