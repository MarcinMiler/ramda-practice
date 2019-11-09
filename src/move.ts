import * as R from 'ramda'

console.log(
    R.move(0 ,2 , [1, 2, 3, 4, 5]), // [2, 3, 1, 4, 5]
    R.move(-1, 0, [1, 2, 3, 4]), // [4, 1, 2, 3]
)