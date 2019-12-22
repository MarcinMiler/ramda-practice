import * as R from 'ramda'

const isOdd = (acc: number, x: number) => x % 2 === 1

console.log(
    R.reduceWhile(isOdd, R.add, 0, [1, 3, 5, 60]), // 9
)
