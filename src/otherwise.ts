import * as R from 'ramda'

const fail = () => Promise.reject('Error')
const defaultRes = R.always({ name: 'default', age: 10 })

const f = R.pipe(
    fail,
    R.otherwise(defaultRes),
    R.then(R.pick(['name'])),
)

f().then(console.log) // { name: 'default' }
