const express = require('express')
const app = express()
const port = 3001
const locales = require('../../base/locales.json')
const weather = require('../../base/weather.json')

app.get('/locales', (req, res) => res.json(locales))
app.get('/weather', (req, res) => res.json(weather))

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})