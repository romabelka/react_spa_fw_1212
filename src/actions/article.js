import dispatcher from '../dispatcher'
import {Action} from './common'
import {
    REMOVE_ARTICLE,
    ADD_ARTICLE
} from './constants'

export function removeArticle(id) {
    dispatcher.dispatch(new Action(REMOVE_ARTICLE, {id}))
}

export function addArticle(article) {
    const {title, text} = article
    dispatcher.dispatch(new Action(ADD_ARTICLE, {title, text}))
}