import React, {PropTypes} from 'react'
import LinkedState from '../mixins/LinkedState'

const NewArticle = React.createClass({
    mixins: [LinkedState('text'), LinkedState('title')],
    render: function() {
        const {title, text} = this.state
        return (
            <div>
                <h3>Create new article</h3>
                title: <input type="text" value = {title} onChange = {this.change_title}/>
                text: <input type="text" value={text} onChange={this.change_text}/>
            </div>
        )
    }
});

/*
class NewArticle extends Component {
    static propTypes = {

    }
    constructor() {
        super()
        this.state = {
            title: '',
            text: ''
        }
    }

    render() {
        const {title, text} = this.state
        return (
            <div>
                <h3>Create new article</h3>
                title: <input type="text" value={title} onChange={this.handleInputChange('title')}/>
                text: <input type="text" value={text} onChange={this.handleInputChange('text')}/>
            </div>
        )
    }

    handleInputChange = (element) => (ev) => {
        this.setState({
            [element]: ev.target.value
        })
    }
}
*/

export default NewArticle