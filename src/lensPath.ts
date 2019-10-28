import * as R from 'ramda'

const xyzLens = R.lensPath(['x', 'y', 'z'])

console.log(
    R.view(xyzLens, { x: { y: { z: 1 } } }), // 1
    R.set(xyzLens, 10, { x: { y: { z: 1 } } }), // { x: { y: { z: 10 } } }
    R.over(xyzLens, R.negate, { x: { y: { z: 1 } } }), // { x: { y: { z: -1 } } }
)
