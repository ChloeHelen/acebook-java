import React from 'react';
const dateFormat = require('dateformat');

const Post = (props) => {
    return (
        <div className='post-main'>
            <p className='post-content'>
                {props.post.content}
            </p>
			<p className='post-time'>
                {dateFormat(props.post.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            </p>
        </div>
    )
};

export default Post;
