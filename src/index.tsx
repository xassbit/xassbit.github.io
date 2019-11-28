import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import Index from "src/blocks/Chronology";
import Contact from "src/blocks/Contact";
import Footer from "src/blocks/Footer";
import Header from "src/blocks/Header";
import Intro from "src/blocks/Intro";
import {store} from "src/data";
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
                        <Index/>
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
