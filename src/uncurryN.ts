import * as R from 'ramda'

const curriedFn = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d

const uncurriedFn = R.uncurryN(4, curriedFn)

console.log(
    uncurriedFn(1, 2, 3, 4), // 10
)
