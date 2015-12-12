const STORE_CHANGE_EVENT = 'STORE_CHANGE_EVENT'
import {EventEmitter} from 'events'

class AbstractStore extends EventEmitter {
    constructor() {
        super()
        this.loading = false
        this.loaded = false
        this.__items = []
    }

    emitChange() {
        this.emit(STORE_CHANGE_EVENT)
    }

    addChangeListener(callback) {
        this.on(STORE_CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(STORE_CHANGE_EVENT, callback)
    }

    getAll() {
        return this.__items
    }

    add(item) {
        this.__items.push(item)
    }

    getById(id) {
        return this.__items.filter((item) => item.id == id)[0]
    }

    remove(id) {
        let item = this.getById(id)
        if (item) this.__items.splice(this.__items.indexOf(item), 1)
    }

    getStore(store) {
        return stores[store]
    }
}

export default AbstractStore
var stores = require('./index')