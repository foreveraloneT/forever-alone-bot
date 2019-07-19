const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.json({
    code: 200,
    data: process.env.GREETING_WORD,
  })
})

app.listen(PORT, () => {
  console.log(`App start at port ${PORT}`)
})
