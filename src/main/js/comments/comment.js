import React from 'react';

const Comment = (props) => {
    return (
        <div className='comment-main'>
            <p className='comment-content'>
                {props.comment.comment}
            </p>
        </div>
    )
}

export default Comment;