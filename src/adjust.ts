import * as R from 'ramda'

const addTenToFirstArgument = R.adjust(0, R.add(10))

console.log(addTenToFirstArgument([1, 2, 3])) // [11, 2, 3]

const addTenToLastArgument = R.adjust(-1, R.add(10))

console.log(addTenToLastArgument([1, 2, 3])) // [1, 2, 13]
