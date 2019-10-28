import * as R from 'ramda'

// @ts-ignore
const headLens = R.lensIndex(0)

console.log(
    R.view(headLens, [1, 2, 3]), // 1
    R.set(headLens, -1, [1, 2, 3]), // [-1, 2, 3]
    R.over(headLens, R.add(1), [1, 2, 3]), // [2, 2, 3]
)
