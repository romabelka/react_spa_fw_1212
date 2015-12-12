import dispatcher from '../dispatcher'
import {Action} from './common'
import {
    REMOVE_ARTICLE
} from './constants'

export function removeArticle(id) {
    dispatcher.dispatch(new Action(REMOVE_ARTICLE, {id}))
}