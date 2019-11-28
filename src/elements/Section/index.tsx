import * as React from "react";
import * as style from "./style.scss";

interface Props {
    purple?: boolean;
    bottomPadding?: boolean;
}

const Section: React.FunctionComponent<Props> = ({children, purple, bottomPadding}) =>
    <div className={[style.sectionWrapper, purple ? style.purple : "", bottomPadding ? style.bottomPadding : ""].join(" ")}>
        <div className={style.section}>{children}</div>
    </div>;

export default Section;
