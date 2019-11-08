import * as R from 'ramda'

console.log(
    R.match(/a/, 'a'), // ['a']
    R.match(/a/, 'b'), // []
)
