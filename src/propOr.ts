import * as R from 'ramda'

console.log(
    R.propOr('Ramda', 'name')({}), // 'Ramda'
)
