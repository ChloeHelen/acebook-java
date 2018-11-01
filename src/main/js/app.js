import PostsBuilder from "./posts/postsBuilder";
import SignUpBuilder from "./sign-up/signUpBuilder";
const React = require('react');
const ReactDOM = require('react-dom');


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <SignUpBuilder/>
                </div>

                <div>
                    <PostsBuilder/>
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
