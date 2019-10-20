import * as R from 'ramda'

const F = function() {
    this.x = 'X'
}

F.prototype.y = 'Y'

const f = new F()

console.log(R.keysIn(f)) // ['x', 'y']
