import React from 'react';

const Post = (props) => {
    return (
        <div className='post-main'>
            <p className='post-content'>
                {props.post.content}
            </p>
			<p className='post-time'>
                {props.post.createdAt}
            </p>
        </div>
    )
}

export default Post;
