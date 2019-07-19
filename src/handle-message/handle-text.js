import { client as line } from '../sdk/line'

export default (event) => {
  const { message: { text }, replyToken } = event
  const reply = `${text}:  ฉันว้าเหว่`
  return line.replyMessage(replyToken, {
    type: 'text',  
    text: reply
  })
}
