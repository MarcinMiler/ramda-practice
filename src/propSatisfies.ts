import * as R from 'ramda'

console.log(
    R.propSatisfies(R.lt(R.__, 10), 'x', { x: 5 }), // true
)
