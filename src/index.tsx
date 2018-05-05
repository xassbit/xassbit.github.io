import "core-js/es6/map";
import "core-js/es6/set";

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import Header from "./blocks/header/Header";

const App: React.StatelessComponent = () =>
    <>
        <Header/>
    </>;

ReactDOM.render(
    <App/>,
    document.getElementById("content"));
