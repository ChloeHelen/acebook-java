import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<p className='post-content'>
				{props.post.content}
			</p>
		</div>
	)
}

export default Post;
