import * as React from "react";
import "./Tab.scss";

interface TabProps {
    title: string;
    open?: boolean;
}

interface TabState {
    open: boolean;
}

class Tab extends React.Component<TabProps, TabState> {
    constructor(props: TabProps) {
        super(props);
        this.state = {
            open: this.props.open ? this.props.open : false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick() {
        const open = !this.state.open;
        this.setState({open});
    }

    public render() {
        return <div className="tab">
            <div className="tab-header" onClick={this.handleClick}>
                <h3>{this.props.title}</h3>
            </div>
            <div className={`tab-body${this.state.open ? " open" : ""}`}>
                <div className="tab-content">
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
}

export default Tab;
