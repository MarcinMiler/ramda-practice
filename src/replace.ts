import * as R from 'ramda'

console.log(
    R.replace('foo', 'bar', 'foo foo foo'), // 'bar foo foo'
    R.replace(/foo/g, 'bar', 'foo foo foo'), // bar bar bar
)
