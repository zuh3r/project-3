const express = require('express')
const app = express()
const port = 3000

app.listen(port, `listening on port ${port}`)

app.get('/api/test', (req, res) => {
  res.json({ message: 'this is a test' })
})
