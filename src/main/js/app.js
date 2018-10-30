import PostsBuilder from "./posts/postsBuilder";
const React = require('react');
const ReactDOM = require('react-dom');



class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PostsBuilder />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
