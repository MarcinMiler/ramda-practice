import * as R from 'ramda'

const eq3 = R.equals(3)

console.log(R.all(eq3)([3, 3, 3])) // true

console.log(R.all(eq3)([1, 2, 3])) // false
