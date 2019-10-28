import * as R from 'ramda'

const xLens = R.lensProp('x')

console.log(
    R.view(xLens, { x: 1, y: 2 }), // 1
    R.set(xLens, 2, { x: 1, y: 2 }), // { x: 2, y: 2 }
    R.over(xLens, R.add(1), { x: 1, y: 2 }), // { x: 2, y: 2 }
)
