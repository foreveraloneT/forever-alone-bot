import handleText from './handle-text'
import handleDefault from './handle-default'

export default (event) => {
  switch(event.message.type) {
    case 'text':
      return handleText(event)
    default:
      return handleDefault(event)
  }
}
