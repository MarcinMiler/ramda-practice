import * as R from 'ramda'

const byAgeDesc = R.descend(R.prop('age'))

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
    R.sort(byAgeDesc)(list), // [{ name: 'Rink', age: 50 }, { name: 'John', age: 20 }]
)
