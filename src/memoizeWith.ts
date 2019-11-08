import * as R from 'ramda'

let count = 0

const addOne = R.memoizeWith(R.identity, x => {
    count += 1
    return R.add(x, 1)
})

console.log(
    addOne(1), // 2
    addOne(1), // 2
    addOne(1), // 2
    count, // 1
)
