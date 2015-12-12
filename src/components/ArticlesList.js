import React, {Component, PropTypes} from 'react'
import Article from './Article'
import {article} from '../stores'

class ArticlesList extends Component {
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
        if (loading) return <h2>Loading...</h2>
        if (!articles || !articles.length) return <h2>No Articles!</h2>

        const articlesComponents = articles.map((article) => {
            const {id} = article;
            return <Article
                ref = {`article${id}`}
                article = {article}
                checked = {id == this.state.checked}
                key={id}/>
        })

        return (
            <div>
                {articlesComponents}
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

export default ArticlesList