import "core-js/es6/map";
import "core-js/es6/set";

import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./blocks/header/Header";
import Intro from "./blocks/intro/Intro";
import "./index.scss";

const App: React.StatelessComponent = () =>
    <>
        <Header/>
        <article>
            <section id="intro">
                <Intro/>
            </section>
        </article>
    </>;

ReactDOM.render(
    <App/>,
    document.getElementById("content"));
