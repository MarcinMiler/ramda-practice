import * as R from 'ramda'

const o = {
    first: 'John',
    second: 'Rink',
    third: 'John'
}

console.log(
    R.invert(o), // { John: ['first', 'third'], Rink: ['second']}
)