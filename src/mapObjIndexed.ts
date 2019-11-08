import * as R from 'ramda'

const f = (num, key, obj) => key + num * 2

console.log(
    R.mapObjIndexed(f, { x: 1, y: 2, z: 3 }), // { x: 'x2', y: 'y4', z: 'z6' }
)
