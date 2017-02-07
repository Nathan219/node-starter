const express = require('express')
const path = require('path')

const app = express()
const host = process.env.RUNNABLE_CONTAINER_URL || 'localhost'
const port = 3000
const gitInfo = require('./utils/git')

app.use('/', express.static(path.join(__dirname, '/public')))

app.get('/git', (req, res) => {
  res.send(gitInfo())
})

app.get('/', (req, res) => {
  res.redirect(req.protocol + '://subdomain.' + req.get('host') + req.originalUrl;
})

app.listen(port, () => {
  var hostName = 'http://' + host + ':' + port
  console.log('Application running at: ' + hostName)
})
