import * as R from 'ramda'

const l = [1, 2, 3, 4]

const p = [{ a: 1 }, { a: 2 }, { a: 3 }]

console.log(
    R.find(R.equals(3))(l), // 3
    R.find(R.propEq('a', 2))(p), // { a: 2 }
)
