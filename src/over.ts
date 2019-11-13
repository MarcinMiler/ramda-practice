import * as R from 'ramda'

const lensHead = R.lensIndex(0)

console.log(
    R.over(lensHead, R.toUpper, ['a', 'b', 'c']), // ['A', 'b', 'c']
)
