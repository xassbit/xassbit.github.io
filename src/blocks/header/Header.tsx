import * as React from "react";
import Headshot from "../../images/headshot.png";
import "./Header.scss";

const Header: React.StatelessComponent = () =>
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
    </header>;

export default Header;
