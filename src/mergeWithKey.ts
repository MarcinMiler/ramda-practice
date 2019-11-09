import * as R from 'ramda'

const concatValues = (key: string, left: number[], right: number[]) =>
    key === 'values' ? R.concat(left, right) : right

console.log(
    R.mergeDeepWithKey(
        concatValues,
        { a: true, z: 1, values: [1, 2, 3] },
        { b: true, z: 2, values: [4, 5, 6] },
    ), // { a: true, b: true, z: 2, values: [1, 2, 3, 4, 5, 6] }
)
