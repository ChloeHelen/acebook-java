import React from "react";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleCmtSubmit = this.handleCmtSubmit.bind(this);
        this.handleCmtChange = this.handleCmtChange.bind(this);
        this.state = {
            comment: ""
        }
    }

    handleCmtSubmit(event) {
        event.preventDefault();
        fetch('/api/posts/'+ this.props.postId+'/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                comment: this.state.comment
            })
        }).then(() => {
            console.log(this.state.comment);
            this.props.cmtApiCall();
            this.setState({
                comment: ""
            });
            console.log(this.state.comment);
        });
    }

    handleCmtChange(event) {
        this.setState({comment: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleCmtSubmit}>
                <textarea className='comment-text' name='comment' value={this.state.comment} onChange={this.handleCmtChange}/>
                <button>Comment</button>
            </form>
        )
    }
}


export default CommentForm;