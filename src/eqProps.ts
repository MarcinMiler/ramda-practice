import * as R from 'ramda'

const o1 = { a: 1, b: 2 }
const o2 = { a: 2, b: 2 }

console.log(
    R.eqProps('b', o1, o2), // true
    R.eqProps('a', o1, o2), // false
)
