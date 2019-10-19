import * as R from 'ramda'

const person = {
    name: 'John',
    age: 20,
}

const personHas = R.has(R.__, person)

console.log(
    R.has('name')(person), // true
    R.has('email')(person), // false
    personHas('name'), // true
    personHas('email'), // false
)
