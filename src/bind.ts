import * as R from 'ramda'

const obj = {
    name: 'John',
}

function f() {
    // @ts-ignore
    return this.name
}

const bindedFunction = R.bind(f, obj)

console.log(bindedFunction()) // 'John'
