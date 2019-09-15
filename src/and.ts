import * as R from 'ramda'

const tt = R.and(true, true)
const tf = R.and(true, false)

console.log(
    tt, // true
    tf, // false
)
