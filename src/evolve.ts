import * as R from 'ramda'

const o = {
    a: 1,
    name: 'john rink',
    nested: {
        a: 1,
        b: 2,
    },
}

const capitalizeFirstLetter = R.pipe(
    R.over(R.lensIndex(0), R.toUpper) as any,
    R.join(''),
)

const transform = {
    a: R.add(1),
    name: R.pipe(
        R.split(' '),
        R.map(capitalizeFirstLetter),
        R.join(' '),
    ),
    nested: {
        a: R.multiply(2),
        b: R.multiply(10),
    },
}

console.log(R.evolve(transform, o))
