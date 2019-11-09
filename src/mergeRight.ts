import * as R from 'ramda'

const withDefault = R.mergeRight({ x: 0, y: 0 })

console.log(
    R.mergeLeft({ name: 'john', age: 10 }, { age: 40 }), // { name: 'john', age: 40 }
    withDefault({ x: 2 }), // { x: 2, y: 0 }
)
