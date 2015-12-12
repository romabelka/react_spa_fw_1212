import React, {Component, PropTypes} from 'react'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    render() {
        const {title, text} = this.props.article
        return (
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        )
    }
}

export default Article