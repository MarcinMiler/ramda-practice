import * as R from 'ramda'

console.log(
    R.difference([1, 2, 3], [2, 3, 4]), // [1]
    R.difference([{ a: 1, b: 2 }], [{ a: 1, b: 2, c: 3, d: 4 }]), // [{ a: 1, b: 2 }]
)
