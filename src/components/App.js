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
    render() {
        return (
            <div>
                <h1>News APP!!!!</h1>
                <ArticlesList articles = {articles} />
            </div>
        )
    }
}

export default App
