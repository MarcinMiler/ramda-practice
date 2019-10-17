import * as R from 'ramda'

const o = {
    a: 1,
    b: 2,
    c: 3,
}
const consoleObj = (key: any, value: any) => console.log(key, ':', value)

R.forEachObjIndexed(consoleObj, o)
