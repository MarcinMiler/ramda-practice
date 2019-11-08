import * as R from 'ramda'

const clock = R.mathMod(R.__, 12)

console.log(
    clock(15), // 3
    clock(18), // 6
    clock(24), // 0
)
