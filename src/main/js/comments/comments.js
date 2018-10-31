import React from 'react';
import Comment from './comment';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.getComments = this.getComments.bind(this);
    }

    render(){
        return (
            <article className='comments-main'>
                <p className='comments-items'>
                    {this.getComments()}
                </p>
            </article>
        )
    }

    getComments() {
        return this.props.comments.map(comment =>
            <Comment key={comment._links.self.href} comment={comment}/>
        );
    }
}

export default Comments;
