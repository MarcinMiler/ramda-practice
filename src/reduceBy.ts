import * as R from 'ramda'

interface Student {
    name: string
    score: number
}

const groupNames = (acc, { name }) => acc.concat(name)
const toGrade = ({ score }: Student) =>
    score < 65 ? 'F' : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A'

const students: Student[] = [
    { name: 'Abby', score: 83 },
    { name: 'Bar', score: 62 },
    { name: 'Curt', score: 88 },
    { name: 'Dora', score: 92 },
]

console.log(R.reduceBy(groupNames, [], toGrade, students))
