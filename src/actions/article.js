import dispatcher from '../dispatcher'
import {Action} from './common'
import {loadAll} from './api/article'
import {
    REMOVE_ARTICLE,
    ADD_ARTICLE,
    LOAD_ARTICLES_START,
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLES_FAIL
} from './constants'

export function removeArticle(id) {
    dispatcher.dispatch(new Action(REMOVE_ARTICLE, {id}))
}

export function addArticle(article) {
    const {title, text} = article
    dispatcher.dispatch(new Action(ADD_ARTICLE, {title, text}))
}

export function loadArticles() {
    dispatcher.dispatch(new Action(LOAD_ARTICLES_START))

    setTimeout(() => loadAll().then(
        (response) => dispatcher.dispatch(new Action(LOAD_ARTICLES_SUCCESS, {response})),
        (error) => dispatcher.dispatch(new Action(LOAD_ARTICLES_FAIL, {error}))
    ), 1000)
}