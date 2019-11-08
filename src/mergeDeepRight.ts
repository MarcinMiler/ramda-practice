import * as R from 'ramda'

console.log(
    R.mergeDeepRight(
        { name: 'fred', age: 10, contact: { email: 'm@m.com' } },
        { age: 20, contact: { email: 'a@a.com' } },
    ), // { name: 'fred', age: 40, contact: { email: 'a@a.com' } }
)
