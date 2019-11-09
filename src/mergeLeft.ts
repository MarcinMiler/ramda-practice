import * as R from 'ramda'

const resetToDefault = R.mergeLeft({ x: 0 })

console.log(
    R.mergeLeft({ name: 'john' }, { name: 'rink', age: 40 }), // { name: 'john', age: 40 }
    resetToDefault({ x: 5, y: 2 }), // { x: 0, y: 2 }
)
