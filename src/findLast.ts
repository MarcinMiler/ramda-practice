import * as R from 'ramda'

const o = [{ a: 1, b: 1 }, { a: 1, b: 2 }]

console.log(
    R.findLast(R.propEq('a', 1))(o), // { a: 1, b: 2}
)
