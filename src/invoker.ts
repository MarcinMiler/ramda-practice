import * as R from 'ramda'

const sliceFrom = R.invoker(1, 'slice')

const sliceFrom4To = R.invoker(2, 'slice')(4)

console.log(
    sliceFrom(6, '12345678'), // 78
    sliceFrom4To(6, '12345678'), // 56
)
