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
                <h1 className='posts-title'>
                    Posts
                </h1>
                <p className='posts-items'>
                    {this.getPosts()}
                </p>
            </article>
        )
    }

    getPosts() {
        return this.props.posts.map(post => {
            return (
                <div>
                    <Post post={post}/>
                    <CommentsBuilder post={post}/>
                </div>
            )
        });
    }
}

export default Posts;
