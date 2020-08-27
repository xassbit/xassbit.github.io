import * as React from "react"
import * as ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {persistStore} from "redux-persist"
import {PersistGate} from "redux-persist/integration/react"
import Chronology from "src/blocks/Chronology"
import Contact from "src/blocks/Contact"
import Footer from "src/blocks/Footer"
import Header from "src/blocks/Header"
import Intro from "src/blocks/Intro"
import {store} from "src/data"
import P from "./elements/P"
import TabX from "./elements/TabX"
import "./index.scss"

const App: React.FunctionComponent = () =>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <>
                <header>
                    <Header/>
                </header>
                <TabX title="Early Years"
                      subTitle="1991 to 2009"
                      tabKey={1}>
                    <P>I was born on October 6th 1991 in Montemor-o-Novo, Portugal.</P>
                    <P>In 1996 I started my musical education in classical percussion at Academia de Música Eborense in
                        Évora.</P>
                    <P>During the last year of high school, I opened and managed the family music store A Baqueta
                        (specialised
                        in drumsticks and mallets).</P>
                    <P important>In 2009 I graduated from secondary school as the highest graded student from the
                        Sciences and
                        Technologies class.</P>
                </TabX>
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
    </Provider>

ReactDOM.render(
    <App/>,
    document.getElementById("content"))
