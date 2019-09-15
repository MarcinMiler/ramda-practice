import * as R from 'ramda'

const obj = {
    name: 'John',
}

console.log(
    R.assoc('age', 20, obj), // { name: "John", age: 20 }
)
