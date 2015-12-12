import dispatcher from '../dispatcher'
import {Action, asyncAC} from './common'
import {loadAll, loadById} from './api/article'
import {
    REMOVE_ARTICLE,
    ADD_ARTICLE,
    LOAD_ARTICLES,
    LOAD_ARTICLE
} from './constants'

export function removeArticle(id) {
    dispatcher.dispatch(new Action(REMOVE_ARTICLE, {id}))
}

export function addArticle(article) {
    const {title, text} = article
    dispatcher.dispatch(new Action(ADD_ARTICLE, {title, text}))
}

export function loadArticles() {
    asyncAC(LOAD_ARTICLES, loadAll())
}

export function loadArticle(id) {
    asyncAC(LOAD_ARTICLE, loadById(id), {id})
}