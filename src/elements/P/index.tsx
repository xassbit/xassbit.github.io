import * as React from "react";
import * as style from "./style.scss";

interface Props {
    important?: boolean;
}

const P: React.FunctionComponent<Props> = ({children, important}) =>
    <p className={[style.paragraph, important ? style.important : ""].join(" ")}>{children}</p>;

export default P;
