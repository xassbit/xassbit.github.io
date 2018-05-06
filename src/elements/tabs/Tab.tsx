import * as React from "react";

interface TabProps {
    title: string;
}

const Tab: React.StatelessComponent<TabProps> = ({title, children}) =>
    <div className="tab">
        <div className="tab-header">
            <h3>{title}</h3>
        </div>
        <div className="tab-body">
            {children}
        </div>
    </div>;

export default Tab;
