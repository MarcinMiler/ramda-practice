import * as R from 'ramda'

console.log(
    R.head([1, 2, 3]), // 1
    R.head([]), // undefined
    R.head('abc'), // 'a'
    R.head(''), // ''
)
