import * as R from 'ramda'

function Car(model: string) {
    // @ts-ignore
    this.model = model
}

Car.prototype.show = function() {
    return `I'm ${this.model}`
}

const newCar = R.construct(Car)
const show = R.invoker(0, 'show')
const p = R.pipe(
    newCar,
    show,
)

console.log(
    R.map(p)(['volvo', 'audi', 'mercedes']), // ["I'm volvo", "I'm audi", "I'm mercedes"]
)
