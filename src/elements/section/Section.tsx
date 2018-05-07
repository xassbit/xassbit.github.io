import * as React from "react";
import "./Section.scss";

interface SectionProps {
    purple?: boolean;
    bottomPadding?: boolean;
}

const Section: React.StatelessComponent<SectionProps> = ({children, purple, bottomPadding}) =>
    <div className={`section-wrapper${purple ? " purple" : ""}${bottomPadding ? " bottomPadding" : ""}`}>
        <div className="section">{children}</div>
    </div>;

export default Section;
