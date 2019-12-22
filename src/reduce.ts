import * as R from 'ramda'

console.log(
    R.reduce<number, number>(R.add, 0)([1, 2, 3, 4, 5]), // 15
)
