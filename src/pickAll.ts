import * as R from 'ramda'

console.log(
    R.pickAll(['a', 'b', 'z'])({ a: 1, b: 2, c: 3, d: 4 }), // { a: 1, b: 2, z: undefined }
)
