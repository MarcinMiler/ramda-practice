import * as R from 'ramda'

const o = {
    first: 'John',
    second: 'Rink',
}

console.log(
    R.invertObj(o), // { John: 'first', Rink: 'second' }
)
