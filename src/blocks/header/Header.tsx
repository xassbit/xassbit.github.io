import * as React from "react";
import Headshot from "../../images/headshot.png";
import "./Header.scss";
import Section from "../../elements/section/Section";

const Header: React.FunctionComponent = () =>
    <Section purple bottomPadding>
        <header>
            <div className="header-wrapper">
                <div className="header-image">
                    <img src={Headshot} alt="myheadshot"/>
                </div>
                <div className="header-title">
                    <h1>Daniel Matias Ferrer</h1>
                    <h2>Curriculum Vitae</h2>
                </div>
            </div>
        </header>
    </Section>;

export default Header;
