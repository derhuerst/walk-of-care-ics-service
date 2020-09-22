'use strict'

const {DateTime} = require('luxon')

const FIRST_EVENT = '2020-09-23T16:00+02:00'
const LAST_EVENT = '2021-09-22T16:00+02:00'

const gibuns5Dates = []

let dt = DateTime.fromMillis(Date.parse(FIRST_EVENT), {
	zone: 'Europe/Berlin',
	locale: 'de-DE',
})
while (dt.toMillis() <= Date.parse(LAST_EVENT)) {
	gibuns5Dates.push(dt)
	dt = dt.plus({week: 1})
}

module.exports = gibuns5Dates
