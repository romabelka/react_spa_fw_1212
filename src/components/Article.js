import React, {Component, PropTypes} from 'react'
import {removeArticle} from '../actions/article'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        }),
        checked: PropTypes.bool
    }

    render() {
        const {checked, article} = this.props
        if (!article) return null;

        const {title, text} = article
        const backgroundColor = checked ?  'red' : 'white'
        return (
            <div style = {{backgroundColor}} onClick = {this.handleClick}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        )
    }

    handleClick = () => {
        removeArticle(this.props.article.id)
    }

}

export default Article