import 'dotenv/config'
import express from 'express'

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.json({
    code: 200,
    data: process.env.GREETING_WORD,
    status: 'ok',
  })
})

app.listen(PORT, () => {
  console.log(`App start at port ${PORT}`)
})
