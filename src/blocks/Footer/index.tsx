import * as React from "react";
import Section from "src/elements/Section";
import * as style from "./style.scss";

const Footer: React.FunctionComponent = () =>
    <Section purple bottomPadding>
        <div className={style.footer}>
            <p>&copy; 2018 Daniel Matias Ferrer</p>
            <aside><p>I really like purple</p></aside>
        </div>
    </Section>;

export default Footer;
