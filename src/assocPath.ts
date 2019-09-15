import * as R from 'ramda'

const nestedObject = {
    a: {
        b: {
            c: 2,
        },
    },
}

console.log(
    R.assocPath(['a', 'b', 'c'], 4, nestedObject), // { a: { b: { c: 4 }}}
)
