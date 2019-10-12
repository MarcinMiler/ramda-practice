import * as R from 'ramda'

function variadicFunction() {
    // @ts-ignore
    this.numbers = arguments
}

variadicFunction.prototype.show = function() {
    return R.map(console.log)(this.numbers)
}

const binaryFunction = R.constructN(2, variadicFunction)

//@ts-ignore
const numbers = binaryFunction(1)(2)

numbers.show() // 1, 2
