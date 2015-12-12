import dispatcher from '../dispatcher'
import {
    REMOVE_ARTICLE
} from './constants'

export function removeArticle(id) {
    dispatcher.dispatch({
        type: REMOVE_ARTICLE,
        data: {id}
    })
}