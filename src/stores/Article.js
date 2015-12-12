import AbstractStore from './AbstractStore'
import dispatcher from '../dispatcher'
import {loadArticles} from '../actions/article'
import {
    REMOVE_ARTICLE,
    ADD_ARTICLE,
    LOAD_ARTICLES_START,
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLES_FAIL
} from '../actions/constants'

class ArticleStore extends AbstractStore {
    constructor() {
        super()

        this.dispatchToken = dispatcher.register((action) => {
            const {data, type} = action
            switch (type) {
                case REMOVE_ARTICLE:
                    this.remove(data.id)
                    break;

                case ADD_ARTICLE:
                    const id = Math.random() * 1000
                    this.add(Object.assign(data, {id}))
                    break;

                case LOAD_ARTICLES_START:
                    this.loading = true
                    this.loaded = false
                    break;

                case LOAD_ARTICLES_SUCCESS:
                    data.response.forEach(this.add.bind(this))
                    this.loading = false
                    this.loaded = true
                    break;

                case LOAD_ARTICLES_FAIL:
                    this.loaded = this.loading = false
                    this.error = data.error
                    break;
            }
            this.emitChange()
        })
    }

    getOrLoadAll() {
        if (!this.loaded && !this.loading) loadArticles()
        return this.getAll()
    }
}

export default ArticleStore