import * as R from 'ramda'

const users = [
    {
        name: 'John',
        age: 20,
    },
    {
        name: 'Will',
        age: 18,
    },
    {
        name: 'Anna',
        age: 25,
    },
]

type User = typeof users[0]

const comparator = R.comparator<User>((a, b) => a.age < b.age)

console.log(R.sort(comparator, users))
// [{ name: 'Will', age: 18 },
// { name: 'John', age: 20 },
// { name: 'Anna', age: 25 }]
