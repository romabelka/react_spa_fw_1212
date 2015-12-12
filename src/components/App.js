import React, {Component} from 'react'
import {article} from '../stores'
import ArticlesList from './ArticlesList'
import NewArticle from './NewArticle'

class App extends Component {
    constructor() {
        super()
        this.state = {
            articles: article.getAll()
        }
    }

    componentDidMount() {
        article.addChangeListener(this.articlesChange)
    }

    componentWillUnmount() {
        article.removeChangeListener(this.articlesChange)
    }

    render() {
        const {articles} = this.state
        return (
            <div>
                <h1>News APP!!!!</h1>
                <ArticlesList articles = {articles} />
                <NewArticle />
            </div>
        )
    }

    articlesChange = () => {
        this.setState({
            articles: article.getAll()
        })
    }
}

export default App
