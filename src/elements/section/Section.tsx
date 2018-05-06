import * as React from "react";
import "./Section.scss";

interface SectionProps {
    purple?: boolean;
}

const Section: React.StatelessComponent<SectionProps> = ({children, purple}) =>
    <div className={`section-wrapper${purple ? " purple" : ""}`}>
        <div className="section">{children}</div>
    </div>;

export default Section;
