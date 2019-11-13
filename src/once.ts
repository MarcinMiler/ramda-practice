import * as R from 'ramda'

const add1Once = R.once(R.add(1))

console.log(
    add1Once(1), // 2
    add1Once(add1Once(1)), // 2
)
