import * as R from 'ramda'

const list = ['a', 'A', 'a', 'b', 'c']

console.log(
    R.countBy(R.toLower)(list), // { a: 3, b: 1, c: 1}
)
