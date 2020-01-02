import * as R from 'ramda'

console.log(
    R.sort(R.prop('age'), [{ name: 'john', age: 20 }, { name: 'greg', age: 10 }]), // [{ name: 'greg', age: 10 }, { name: 'john', age: 20 }]
)
