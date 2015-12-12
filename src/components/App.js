import React, {Component} from 'react'
import {article} from '../stores'
import ArticlesList from './ArticlesList'
import NewArticle from './NewArticle'

class App extends Component {
    constructor() {
        super()
        this.state = {
            articles: article.getOrLoadAll(),
            loading: article.loading
        }
    }

    componentDidMount() {
        article.addChangeListener(this.articlesChange)
    }

    componentWillUnmount() {
        article.removeChangeListener(this.articlesChange)
    }

    render() {
        const {articles, loading} = this.state
        return (
            <div>
                <h1>News APP!!!!</h1>
                <ArticlesList articles = {articles} loading = {loading}/>
                <NewArticle />
            </div>
        )
    }

    articlesChange = () => {
        this.setState({
            articles: article.getOrLoadAll(),
            loading: article.loading
        })
    }
}

export default App
