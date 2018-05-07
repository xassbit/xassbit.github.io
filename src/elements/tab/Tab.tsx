import * as React from "react";
import "./Tab.scss";

interface TabProps {
    title: string;
    subTitle: string;
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
                <div className="tab-header-text">
                    <h3>{this.props.title}</h3>
                    <p className="tab-sub-title">{this.props.subTitle}</p>
                </div>
                <div className="cross">
                    <div className={`cross-1${this.state.open ? " open" : ""}`}/>
                    <div className={`cross-2${this.state.open ? " open" : ""}`}/>
                </div>
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
