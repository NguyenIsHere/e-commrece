// server.js
const createServer = require('./createserver')

const server = createServer()

const PORT = 3000

server.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`)
})
