import * as R from 'ramda'

console.log(
    R.objOf('a')(1), // { a: 1 }
    R.pipe(
        R.map(R.objOf('b')),
        R.objOf('a'),
    )([1, 2, 3]), // { a: [ { b: 1 }, { b: 2 }, { b: 3 } ] }
)
