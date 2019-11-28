import * as React from "react";
import Headshot from "../../images/headshot.png";
import * as style from "./style.scss";
import Section from "src/elements/Section";

const Header: React.FunctionComponent = () =>
    <Section purple bottomPadding>
        <header>
            <div className={style.headerWrapper}>
                <div className={style.headerImage}>
                    <img src={Headshot} alt="my headshot"/>
                </div>
                <div className={style.headerTitle}>
                    <h1>Daniel Matias Ferrer</h1>
                    <h2>Curriculum Vitae</h2>
                </div>
            </div>
        </header>
    </Section>;

export default Header;
