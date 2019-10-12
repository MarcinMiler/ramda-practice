import * as R from 'ramda'

const fn = R.cond<number, string>([
    [R.equals(0), R.always('0')],
    [R.equals(1), R.always('1')],
    [R.T, R.always('whatever')],
])

console.log(
    fn(0), // '0'
    fn(1), // '1'
    fn(2), // 'whatever'
)
