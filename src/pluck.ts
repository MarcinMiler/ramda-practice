import * as R from 'ramda'

console.log(
    R.pluck('age', [{ name: 'john', age: 10 }, { name: 'rink', age: 15 }]), // [10, 15]
)
