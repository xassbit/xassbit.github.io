import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import Chronology from "./blocks/chronology/Chronology";
import Contact from "./blocks/contact/Contact";
import Footer from "./blocks/footer/Footer";
import Header from "./blocks/header/Header";
import Intro from "./blocks/intro/Intro";
import {store} from "./data";
import "./index.scss";

const App: React.FunctionComponent = () =>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <>
                <header>
                    <Header/>
                </header>
                <article>
                    <section id="intro">
                        <Intro/>
                    </section>
                    <section id="chronology">
                        <Chronology/>
                    </section>
                    <section id="contact">
                        <Contact/>
                    </section>
                </article>
                <footer>
                    <Footer/>
                </footer>
            </>
        </PersistGate>
    </Provider>;

ReactDOM.render(
    <App/>,
    document.getElementById("content"));
