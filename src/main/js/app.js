const React = require('react');
const ReactDOM = require('react-dom');

import Posts from './posts/posts'
import PostForm from './posts/postForm'

const client = require('./client');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.apiCall = this.apiCall.bind(this)
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.apiCall();
    }

    apiCall() {
        client({method: 'GET', path: '/api/posts'}).then(response => {
            this.setState({posts: response.entity._embedded.posts});
        });
    }

    render() {
        return (
            <div>
                <PostForm apiCall={this.apiCall}/>
                <Posts posts={this.state.posts}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
