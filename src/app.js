import 'dotenv/config'
import express from 'express'

import { middleware as lineMiddleware } from './sdk/line'
import handleMessage from './handle-message'

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.json({
    code: 200,
    data: process.env.GREETING_WORD,
    status: 'ok',
  })
})

app.post('/line/webhook', lineMiddleware, (req, res) => {
  Promise.all(req.body.events.map(handleMessage))
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error)
      res.end()
    })
})

app.listen(PORT, () => {
  console.log(`App start at port ${PORT}`)
})
