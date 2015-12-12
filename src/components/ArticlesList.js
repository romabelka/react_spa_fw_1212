import React, {Component, PropTypes} from 'react'
import Article from './Article'

class ArticlesList extends Component {
    static propTypes = {
        articles: PropTypes.array
    }

    render() {
        const {articles} = this.props
        if (!articles || !articles.length) return <h2>No Articles!</h2>

        const articlesComponents = articles.map((article) => {
            return <Article article = {article} key={article.id}/>
        })

        return (
            <div>
                {articlesComponents}
            </div>
        )
    }
}

export default ArticlesList