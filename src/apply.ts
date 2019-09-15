import * as R from 'ramda'

const variadicFunctionSum = (...n: number[]) => n.reduce((acc, x) => acc + x)

const list = [1, 2, 3, 4, 5]

console.log(
    R.apply(Math.max, list), // 5
    R.apply(variadicFunctionSum, list), // 15
)
