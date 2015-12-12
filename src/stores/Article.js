import AbstractStore from './AbstractStore'
import dispatcher from '../dispatcher'
import {
    REMOVE_ARTICLE,
    ADD_ARTICLE
} from '../actions/constants'

const articles = [{
    id: 1,
    title: 'Some title',
    text: 'Lorem Ipsum'
}, {
    id: 2,
    title: 'some other title',
    text: 'some new text'
}]

class ArticleStore extends AbstractStore {
    constructor() {
        super()
        this.__items = articles

        this.dispatchToken = dispatcher.register((action) => {
            const {data, type} = action
            switch (type) {
                case REMOVE_ARTICLE:
                    this.remove(data.id)
                    this.emitChange()
                    break;
                case ADD_ARTICLE:
                    const id = Math.random() * 1000
                    this.add(Object.assign(data, {id}))
                    this.emitChange()
                    break;
            }
        })
    }
}

export default ArticleStore