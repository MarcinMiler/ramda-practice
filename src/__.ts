import * as R from 'ramda'

const dec10 = R.subtract(R.__, 10)

console.log(dec10(11)) // 1
