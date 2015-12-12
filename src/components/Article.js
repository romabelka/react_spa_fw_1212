import React, {Component, PropTypes} from 'react'

class Article extends Component {
    constructor() {
        super()
        this.state = {
            checked: false
        }
    }
    static propTypes = {
        article: PropTypes.object.isRequired
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
        const {checked} = this.state
        const backgroundColor = checked ?  'red' : 'white'
        return (
            <div onClick = {this.toggleChecked} style = {{backgroundColor}}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        )
    }

    toggleChecked = () => {
        this.setState({
            checked: !this.state.checked
        })
    }
}

export default Article