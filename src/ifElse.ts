import * as R from 'ramda'

const count = R.ifElse(R.has('count'), R.over(R.lensProp('count'), R.add(1)), R.assoc('count', 1))

console.log(
    count({}), // { count: 1 }
    count({ count: 5 }), // { count: 6 }
)
