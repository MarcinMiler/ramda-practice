import * as R from 'ramda'

console.log(
    R.project(['name'], [{ name: 'john', age: 10 }, { name: 'alex', age: 15 }]), // [{ name: 'john' }, { name: 'alex' }]
)
