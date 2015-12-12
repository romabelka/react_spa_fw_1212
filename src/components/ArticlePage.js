import React, {Component, PropTypes} from 'react'
import {article} from '../stores'
import Article from './Article'

class ArticlePage extends Component {
    constructor() {
        super()
        this.state = {
            article: null
        }
    }

    componentDidMount() {
        article.addChangeListener(this.articlesChange)
        this.articlesChange()
    }

    componentWillUnmount() {
        article.removeChangeListener(this.articlesChange)
    }

    render() {
        const {article} = this.state
        if (!article) return null
        if (article.loading) return <h2>Loading article </h2>
        return (
            <div>
                <h2>Article page</h2>
                <Article article = {article} />
            </div>
        )
    }

    articlesChange = () => {
        const {id} = this.props.params
        const articleEntity = article.getOrLoadById(id);
        this.setState({
            article: articleEntity
        })
    }
}

export default ArticlePage