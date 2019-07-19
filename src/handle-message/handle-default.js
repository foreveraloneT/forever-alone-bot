import { client as line } from '../sdk/line'

export default (event) => {
  // line.replyMessage(event.replyToken, 'ยังไม่ support จ้า')
  return Promise.resolve(null);
}
