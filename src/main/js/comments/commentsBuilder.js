import React from 'react';
import Comments from "./comments";

const client = require('../client');

class CommentsBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.cmtApiCall = this.cmtApiCall.bind(this)
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        this.cmtApiCall();
    }

    cmtApiCall() {
        client({method: 'GET', path: '/api/posts/'+postId+'/comments'}).then(response => {
            this.setState({
                comments: response.entity
            });
        });
    }

    render() {
        return (
            <div>
                <Comments comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentsBuilder;
