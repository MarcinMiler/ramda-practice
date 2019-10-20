import * as R from 'ramda'

console.log(
    R.juxt([Math.min, Math.max])(-5, -4, 4, 5), // [-5, 5]
)
