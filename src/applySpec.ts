import * as R from 'ramda'

const object = R.applySpec({
    sum: R.add,
    nested: {
        multiply: R.multiply
    }
})

console.log(
    object(1, 2) // { sum: 3, nested: { multiply: 2 } }
)