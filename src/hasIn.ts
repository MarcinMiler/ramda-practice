import * as R from 'ramda'

console.log(
    R.hasIn('map', new Array()), // true
    R.hasIn('reduce', new Array()), // true
)
