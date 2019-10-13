import * as R from 'ramda'

const Just = (x: number) => ({ some: x, empty: () => 'None' })

console.log(
    R.empty('abcd'), // ''
    R.empty({ a: 1 }), // {}
    R.empty([1, 2, 3, 4]), // []
    R.empty(Just(20)), // 'None'
)
