import * as R from 'ramda'

const byAgeAsc = R.ascend(R.prop('age'))

const list = [
    {
        name: 'John',
        age: 20,
    },
    {
        name: 'Rink',
        age: 50,
    },
]

console.log(
    R.sort(byAgeAsc)(list), // [{ name: 'John', age: 20 }, { name: 'Rink', age: 50 }]
)
