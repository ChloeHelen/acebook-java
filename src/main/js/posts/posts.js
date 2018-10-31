import React from 'react';
import Post from './post'

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
        return this.props.posts.map(post =>
            <Post key={post._links.self.href} post={post}/>
        );
    }
}

export default Posts;
