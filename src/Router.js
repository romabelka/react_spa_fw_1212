import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './components/App'
import NewArticle from './components/NewArticle'
import ArticleList from './components/ArticlesList'
import ArticlePage from './components/ArticlePage'
import NotFound from './components/NotFound'

export default (
    <Router history = {createBrowserHistory()}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {ArticleList} />
            <Route path = "new" component = {NewArticle} />
            <Route path = "/:id" component = {ArticlePage} />
        </Route>
        <Route path="*" component = {NotFound} />
    </Router>
)