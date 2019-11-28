import * as React from "react";
import Section from "Section";
import "./Footer.scss";

const Footer: React.FunctionComponent = () =>
    <Section purple bottomPadding>
        <div className="footer">
            <p>&copy; 2018 Daniel Matias Ferrer</p>
            <aside><p>I really like purple</p></aside>
        </div>
    </Section>;

export default Footer;
