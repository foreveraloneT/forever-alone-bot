import handleText from './handle-text'
import handleDefault from './handle-default'

export default (event) => {
  if (event.type !== 'message') {
    return Promise.resolve(null);
  }

  switch(event.message.type) {
    case 'text':
      return handleText(event)
    default:
      return handleDefault(event)
  }
}
