const express = require('express')

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
  res.json({
    code: 200,
    data: 'Forever Alone',
  })
})

app.listen(PORT, () => {
  console.log(`App start at port ${PORT}`)
})
