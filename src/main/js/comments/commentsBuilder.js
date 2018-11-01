import React from 'react';
import Comments from "./comments";
import CommentForm from "./commentForm";

const client = require('../client');

class CommentsBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.cmtApiCall = this.cmtApiCall.bind(this);
        this.state = {
            comments: [],
            postId: this.props.post.id
        };
    }

    componentDidMount() {
        this.cmtApiCall();
    }

    cmtApiCall() {
        client({method: 'GET', path: '/api/posts/'+ this.props.post.id +'/comments'}).then(response => {
            this.setState({
                comments: response.entity
            });
        });
    }

    render() {
        return (
            <div className='comments-all'>
                <Comments comments={this.state.comments}/>
                <CommentForm postId={this.state.postId} cmtApiCall={this.cmtApiCall} />
            </div>
        )
    }
}

export default CommentsBuilder;
