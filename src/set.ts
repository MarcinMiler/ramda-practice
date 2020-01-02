import * as R from 'ramda'

const xLens = R.lensProp('x')

console.log(
    R.set(xLens, 4, { x: 1, y: 2 }), // { x: 4, y: 2 }
)
