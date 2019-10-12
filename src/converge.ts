import * as R from 'ramda'

const avg = R.converge(R.divide, [R.sum, R.length])

console.log(
    avg([1, 2, 3, 4, 5]), // 3
)

const something = R.converge(R.concat, [R.toUpper, R.toLower])

console.log(
    something('Yikes'), // 'YIKESyikes'
)
