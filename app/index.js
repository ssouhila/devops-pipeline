const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({ status: 'ok', version: process.env.APP_VERSION || '1.0.0' })
})

app.get('/health', (req, res) => {
  res.json({ healthy: true })
})

app.get('/metrics', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.send(`# HELP http_requests_total Total HTTP requests\nhttp_requests_total 42\n`)
})

app.listen(port, () => console.log(`App running on port ${port}`))