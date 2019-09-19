import * as R from 'ramda'

const addWordString = (x: string) => x + 'world'

const addSpace = (x: string) => x + ' '

console.log(
    R.compose(
        R.toUpper,
        addWordString,
        addSpace,
    )('hello'), // HELLO WORLD
)
