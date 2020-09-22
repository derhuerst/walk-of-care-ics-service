'use strict'

// const {DateTime, IANAZone} = require('luxon')
const generateIcs = require('ics-service/generate-ics')
const dates = require('./dates')

const TITLE = 'Walk of Care'
const DESCRIPTION = `\
Mit der Initiative #gibuns5 möchten wir unsere 5 Forderungen für ein \
gerechteres Gesundheitssystem in den Bundestagswahlkampf tragen. Denn \
auch wenn es dieses Jahr durch die Corona Pandemie viel Applaus für \
die Beschäftigten im Gesundheitswesen gab, hat es noch nicht die \
notwendigen politischen Veränderungen gegeben.`
const REPO_URL = 'https://github.com/derhuerst/walk-of-care-ics-service'

const ADDRESS = 'Friedrichstraße 108'
const LATITUDE = 52.524594
const LONGITUDE = 13.387696
const RADIUS = 50

const events = dates.map((dt) => {
	const t = dt.toMillis()
	return {
		title: '#gibuns5 Kundgebung',
		description: DESCRIPTION,
		status: 'CONFIRMED',

		location: ADDRESS,
		url: 'https://digitalwalkofcare.org/walk-of-care-startseite/gibuns5',
		geo: {lat: LATITUDE, lon: LONGITUDE, radius: RADIUS},

		start: [dt.year, dt.month, dt.day, dt.hour, dt.minute],
		startInputType: 'local',
		startOutputType: 'local',
		duration: {hours: 2, minutes: 0},

		uid: 'gibuns5-' + (t / 1000 | 0),
		sequence: 1,
		productId: REPO_URL,
	}
})

const generateWalkOfCareIcs = (feedUrl = null) => {
	return generateIcs(TITLE, events, feedUrl)
}

module.exports = generateWalkOfCareIcs
