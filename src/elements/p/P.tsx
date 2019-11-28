import * as React from "react";
import "./P.scss";

interface PProps {
    important?: boolean;
}

const P: React.FunctionComponent<PProps> = ({children, important}) =>
    <p className={`paragraph ${important ? "important" : ""}`}>{children}</p>;

export default P;
