import "core-js/es6/map";
import "core-js/es6/set";

import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./blocks/header/Header";
import Intro from "./blocks/intro/Intro";
import "./index.scss";
import Footer from "./blocks/footer/Footer";

const App: React.StatelessComponent = () =>
    <>
        <header>
            <Header/>
        </header>
        <article>
            <section id="intro">
                <Intro/>
            </section>
        </article>
        <footer>
            <Footer/>
        </footer>
    </>;

ReactDOM.render(
    <App/>,
    document.getElementById("content"));