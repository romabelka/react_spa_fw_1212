import React, {Component} from 'react'
import {Link} from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                <h1>News APP!!!!</h1>
                {this.props.children}
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="new">New Article</Link></li>
                </ul>
            </div>
        )
    }
}

export default App
