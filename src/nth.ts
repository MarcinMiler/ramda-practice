import * as R from 'ramda'

console.log(
    R.nth(2, [1, 2, 3]), // 3
    R.nth(-1, [1, 2, 3, 4]), // 4
    R.nth(1, [1, 2, 3]), // 2
)
