import * as R from 'ramda'

console.log(
    R.groupWith(R.equals, [0, 1, 1, 2, 3, 3, 3]), // [[0], [1, 1], [2], [3, 3, 3]]
    R.groupWith((a: number, b: number) => a + 1 === b, [1, 1, 2, 3, 5, 7, 8, 9]), // [[1], [1, 2, 3], [5], [7, 8, 9]]
)
