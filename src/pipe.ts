import * as R from 'ramda'

console.log(
    R.pipe(
        R.add(1),
        R.multiply(2),
        R.add(10),
        R.subtract(R.__, 1),
    )(1), // 13
)
