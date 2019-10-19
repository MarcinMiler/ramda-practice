import * as R from 'ramda'

interface Person {
    id: number
    name: string
}

const persons: Person[] = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Rink',
    },
    {
        id: 2,
        name: 'Annie',
    },
]

console.log(R.innerJoin<Person, number>((record, id) => record.id === id, persons, [1, 2, 99]))
