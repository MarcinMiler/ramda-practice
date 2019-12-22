import * as R from 'ramda'

console.log(
    R.reduce(
        (acc: number[], item: number) => (item > 3 ? R.reduced(acc) : acc.concat(item)),
        [],
        [1, 2, 3, 4, 5],
    ), // [1, 2, 3]
)
