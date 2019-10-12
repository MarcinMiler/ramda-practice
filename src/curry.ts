import * as R from 'ramda'

const uncurriedFn = (a: number, b: number, c: number, d: number) => a + b + c + d

const curriedFn = R.curry(uncurriedFn)

console.log(
    curriedFn(1)(2)(3)(4), // 10
)
