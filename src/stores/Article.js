import AbstractStore from './AbstractStore'
import dispatcher from '../dispatcher'
import {loadArticles, loadArticle} from '../actions/article'
import {
    REMOVE_ARTICLE,
    ADD_ARTICLE,
    LOAD_ARTICLES_START,
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLES_FAIL,
    LOAD_ARTICLE_START,
    LOAD_ARTICLE_SUCCESS,
    LOAD_ARTICLE_FAIL
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

                case LOAD_ARTICLE_START:
                    this.add({
                        id: data.id,
                        loading: true
                    })
                    break;
                case LOAD_ARTICLE_SUCCESS:
                    this.remove(data.response.id)
                    this.add(data.response)
                    break;
            }
            this.emitChange()
        })
    }

    getOrLoadAll() {
        if (!this.loaded && !this.loading) loadArticles()
        return this.getAll()
    }

    getOrLoadById(id) {
        const article = this.getById(id)
        if (!article) loadArticle(id)
        return article
    }
}

export default ArticleStore