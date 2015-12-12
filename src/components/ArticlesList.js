import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'

class ArticlesList extends Component {
    constructor() {
        super()
        this.state = {
            checked: null
        }
    }
    static propTypes = {
        articles: PropTypes.array,
        loading: PropTypes.bool
    }
    componentDidMount() {
        //console.log('---', findDOMNode(this.refs.article1));
    }

    render() {
        const {articles, loading} = this.props
        if (loading) return <h2>Loading...</h2>
        if (!articles || !articles.length) return <h2>No Articles!</h2>

        const articlesComponents = articles.map((article) => {
            const {id} = article;
            return <Article
                onClick = {this.chooseArticle(id)}
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
    chooseArticle = (id) => (ev) => {
        this.setState({
            checked: id
        })
    }
}

export default ArticlesList