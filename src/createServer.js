// createServer.js
const fs = require('fs')
const https = require('https')
const express = require('express')

const createServer = () => {
  const app = express()

  const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }

  app.get('/', (req, res) => {
    res.send('Hello HTTPS!')
  })

  const server = https.createServer(options, app)

  return server
}

module.exports = createServer
