import * as React from "react";
import Section from "../../elements/section/Section";
import Tab from "../../elements/tabs/Tab";
import Tabs from "../../elements/tabs/Tabs";

const Chronology: React.StatelessComponent = () =>
    <Section>
        <Tabs>
            <Tab title="Tab title">
                <p>I've studied and worked in several roles in the arts and sciences.
                    Bellow you'll find a chronology of the most relevant stages of my life thus far.</p>
            </Tab>
        </Tabs>
    </Section>;

export default Chronology;
