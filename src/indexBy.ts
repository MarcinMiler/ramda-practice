import * as R from 'ramda'

const o = [
    {
        id: '1',
        name: 'John',
    },
    {
        id: '2',
        name: 'George',
    },
]

console.log(
    R.indexBy(R.prop('id'), o), // { '1': { id: '1', name: 'John' }, '2': { id: '2', name: 'George'}}
)
