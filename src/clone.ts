import * as R from 'ramda'

const obj = {
    a: {
        b: {
            c: [1, 2, 3],
        },
    },
}

const obj2 = {
    clone: () => 'cloned',
}

console.log(
    R.clone(obj), // { a: { b: { c: [1, 2, 3]}}}
    R.clone(obj2), // 'cloned'
)
