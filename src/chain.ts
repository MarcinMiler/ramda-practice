import * as R from 'ramda'

const duplicate = (x: number) => [x, x]

console.log(R.chain(duplicate, [1, 2, 3])) // [1, 1, 2, 2, 3, 3]
