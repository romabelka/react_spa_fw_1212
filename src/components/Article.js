import React, {Component, PropTypes} from 'react'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        checked: PropTypes.bool,
        onClick: PropTypes.func
    }

/*
    shouldComponentUpdate(newProps, newState) {
        const oldArticle = this.props.article
        const {article} = newProps
        //won't work, article and oldArticle is always the same object, use Immutable.js
        return article != oldArticle
    }
*/

    render() {
        console.log('---', 123);
        const {title, text} = this.props.article
        const {checked, onClick} = this.props
        const backgroundColor = checked ?  'red' : 'white'
        return (
            <div style = {{backgroundColor}} onClick = {onClick}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        )
    }

}

export default Article