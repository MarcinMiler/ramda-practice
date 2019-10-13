import * as R from 'ramda'

interface Obj {
    a: number
}

const comp = (x: Obj, y: Obj) => x.a === y.a

console.log(
    // @ts-ignore
    R.differenceWith(comp, [{ a: 1, a: 2 }], [{ a: 2, a: 3 }]), // [{ a: 2 }]
)
