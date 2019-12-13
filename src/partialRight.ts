import * as R from 'ramda'

const show = (a: string, b: string, c: string, d: string) => a + b + c + d

console.log(
    R.partialRight(show, ['1', '2', '3'])('4'), // '4123'
)
