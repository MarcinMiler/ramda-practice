import * as R from 'ramda'

const multiply = (x: number, y: number) => x * y

console.log(
    R.partial(multiply, [2])(2), // 4
)
