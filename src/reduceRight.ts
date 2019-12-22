import * as R from 'ramda'

console.log(
    // @ts-ignore
    R.reduceRight<any>(R.subtract, 0, [1, 2, 3, 4]), // -2
)
