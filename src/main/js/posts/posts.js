import React from 'react';
import Post from './post'
import CommentsBuilder from "../comments/commentsBuilder";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.getPosts = this.getPosts.bind(this);
    }

    render() {
        return (
            <article className='posts-main'>
                <p className='posts-items'>
                    {this.getPosts()}
                </p>
            </article>
        )
    }

    getPosts() {
        return this.props.posts.map(post => {
            return (
                <div className='post-container'>
                    <Post post={post}/>
                    <CommentsBuilder post={post}/>
                </div>
            )
        });
    }
}

export default Posts;
