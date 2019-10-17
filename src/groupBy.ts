import * as R from 'ramda'

interface Student {
    name: string
    score: number
}

const students = [{ name: 'John', score: 0 }, { name: 'Annie', score: 80 }]

const groupByGrade = R.groupBy(({ score }: Student) =>
    score < 65 ? 'F' : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A',
)

console.log(groupByGrade(students))
