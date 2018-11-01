import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            content: ""
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/api/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                content: this.state.content
            })
        }).then(() => {
            this.props.apiCall();
            this.setState({
                content: ""
            });
        });
    }

    handleChange(event) {
        this.setState({content: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.content} onChange={this.handleChange}/>
                <button>Post</button>
            </form>
        )
    }
}

export default PostForm;