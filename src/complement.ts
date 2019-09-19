import * as R from 'ramda'

const even = (x: number) => x % 2 === 0

const odd = R.complement(even)

console.log(
    even(10), // true
    odd(10), // false
)
