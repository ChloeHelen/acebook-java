import React from 'react';

class SignUpBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            password: '',
            email: ''
        }
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleChangeEmail(event){
        this.setState({
            email: event.target.value
        });
    }

    handleChangePassword(event){
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("/api/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
    }

    render() {
        return (
            <form className='sign-up' onSubmit={this.handleSubmit}>
                <h1 className='sign-up-text'>Sign up</h1>
                <input type='text' onChange={this.handleChangeName} value={this.state.name} placeholder='name' required/>
                <input type='email' onChange={this.handleChangeEmail} value={this.state.email} placeholder='email' required/>
                <input type='password' onChange={this.handleChangePassword} value={this.state.password} placeholder='password' required/>
                <button>Submit</button>
            </form>
        );
    }
}

export default SignUpBuilder;