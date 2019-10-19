import * as R from 'ramda'

console.log(
    R.init([1, 2, 3]), // [1, 2]
    R.init([1, 2]), // [1]
    R.init([1]), // []
    R.init([]), // []
)
