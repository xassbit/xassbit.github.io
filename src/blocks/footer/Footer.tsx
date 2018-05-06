import * as React from "react";
import Section from "../../elements/section/Section";
import "./Footer.scss";

const Footer: React.StatelessComponent = () =>
    <Section purple>
        <div className="footer">
            <p>&copy; 2018 Daniel Matias Ferrer</p>
            <aside><p>I really like purple</p></aside>
        </div>
    </Section>;

export default Footer;
