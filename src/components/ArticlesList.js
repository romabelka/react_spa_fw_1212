import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'

class ArticlesList extends Component {
    static propTypes = {
        articles: PropTypes.array
    }
    componentDidMount() {
        console.log('---', findDOMNode(this.refs.article1));
    }

    render() {
        const {articles} = this.props
        if (!articles || !articles.length) return <h2>No Articles!</h2>

        const articlesComponents = articles.map((article) => {
            return <Article ref = {`article${article.id}`}article = {article} key={article.id}/>
        })

        return (
            <div>
                {articlesComponents}
            </div>
        )
    }
}

export default ArticlesList