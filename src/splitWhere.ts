import * as R from 'ramda'

console.log(
    R.splitWhen(R.equals(2), [1, 2, 3, 4]), // [[1], [2, 3, 4]]
)
