import dispatcher from '../dispatcher'

export class Action {
    constructor(type, data) {
        this.type = type
        this.data = data
    }
}

export function asyncAC(type, promise) {
    dispatcher.dispatch(new Action(`${type}_START`))

    promise.then(
        (response) => dispatcher.dispatch(new Action(`${type}_SUCCESS`, {response})),
        (error) => dispatcher.dispatch(new Action(`${type}_FAIL`, {error}))
    )
}