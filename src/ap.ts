import * as R from 'ramda'

console.log(
    R.ap([R.add(3), R.multiply(2)])([1, 2, 3]), // [4, 5, 6, 2, 4, 6]
)
