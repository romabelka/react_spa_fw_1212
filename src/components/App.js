import React, {Component} from 'react'
import ArticlesList from './ArticlesList'

const articles = [{
    id: 1,
    title: 'Some title',
    text: 'Lorem Ipsum'
}, {
    id: 2,
    title: 'some other title',
    text: 'some new text'
}]

class App extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    render() {
        console.log('---', articles[0].title);
        return (
            <div>
                <h1 onClick = {this.handleClick}>News APP!!!!</h1>
                <ArticlesList articles = {articles} />
            </div>
        )
    }

    handleClick = () => {
        articles[0].title = 'changed!!'
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

export default App
