import {Dispatcher} from 'flux'

const appDispatcher = new Dispatcher

appDispatcher.register(console.log.bind(console))

export default appDispatcher