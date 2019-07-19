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

app.post('/line/webhook', lineMiddleware, async (req, res) => {
  try {
    await Promise.all(req.body.events.map(handleMessage))
    res.end()
  } catch (error) {
    console.error(err)
    res.status(500).end()
  }
})

app.listen(PORT, () => {
  console.log(`App start at port ${PORT}`)
})
