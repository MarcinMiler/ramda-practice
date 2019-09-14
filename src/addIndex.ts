import * as R from 'ramda'

const mapIndexed = R.addIndex(R.map)

// @ts-ignore
const res = mapIndexed((val, i) => R.add(val, i), [1, 2, 3, 4])

console.log(res) // [1, 3, 5, 7]
