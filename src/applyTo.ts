import * as R from 'ramda'

const ten = R.applyTo(10)

console.log(
    ten(R.identity), // 10
    ten(R.add(1)), // 11
)
