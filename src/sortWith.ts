import * as R from 'ramda'

const p = [{ name: 'john', age: 20 }, { name: 'greg', age: 10 }, { name: 'anna', age: 40 }]

console.log(
    R.sortWith([
        R.descend(R.prop('age')),
        // @ts-ignore
        R.ascend(R.prop('name')),
    ])(p),
)
