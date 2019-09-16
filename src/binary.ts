import * as R from 'ramda'

const threeArgs = (a: number, b: number, c: number) => [a, b, c]

const twoArgs = R.binary(threeArgs)

console.log(
    twoArgs(1, 2) // [1, 2, undefined]
)