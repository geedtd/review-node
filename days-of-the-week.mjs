export {
    daysOfTheWeek,
    myFavoriteDay,
    saturday,
    randomDay,
}
const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
// console.log(daysOfTheWeek)

const myFavoriteDay = 'Saturday'

const saturday = {
    weekday: false,
    good: true,
    quote: 'Saturdays do indeed exist.'
}

function randomDay() {
    return daysOfTheWeek[Math.floor(Math.random() * (daysOfTheWeek.length - 1))]
}