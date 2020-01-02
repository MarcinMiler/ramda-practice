import * as R from 'ramda'

R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]) // Just([1, 2, 3])
R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]) // Nothing

R.sequence(R.of, Just([1, 2, 3])) // [Just(1), Just(2), Just(3)]
