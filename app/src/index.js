import React from "react";
import ReactDOM from "react-dom";
import Routes from './routes'
require('./sass/main.scss');

class Site extends React.Component {
    render() {
        return (
            <Routes />
        );
    }
}

ReactDOM.render(
    <Site/>, document.getElementById("root"));