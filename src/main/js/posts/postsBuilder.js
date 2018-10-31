import React from 'react';
import PostForm from "./postForm";
import Posts from "./posts";

const client = require('../client');

class PostsBuilder extends React.Component {

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
            this.setState({
                posts: response.entity
            });
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

export default PostsBuilder;