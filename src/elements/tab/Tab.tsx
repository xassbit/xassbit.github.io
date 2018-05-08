import * as React from "react";
import {connect} from "react-redux";
import {AppState, TabKey, toggleTab} from "../../data";
import "./Tab.scss";

interface TabProps {
    title: string;
    subTitle: string;
    tabKey: TabKey;
    open: boolean;
    onClick: () => void;
}

const Tab: React.StatelessComponent<TabProps> = ({children, title, subTitle, open, onClick}) =>
    <div className="tab">
        <div className="tab-header" onClick={onClick}>
            <div className="tab-header-text">
                <h3>{title}</h3>
                <p className="tab-sub-title">{subTitle}</p>
            </div>
            <div className="cross">
                <div className={`cross-1${open ? " open" : ""}`}/>
                <div className={`cross-2${open ? " open" : ""}`}/>
            </div>
        </div>
        <div className={`tab-body${open ? " open" : ""}`}>
            <div className="tab-content">
                {children}
            </div>
        </div>
    </div>;

interface TabOwnProps {
    title: string;
    subTitle: string;
    tabKey: TabKey;
}

export default connect(
    (state: AppState, ownProps: TabOwnProps) => ({
        open: state.tabs.indexOf(ownProps.tabKey) !== -1,
    }),
    (dispatch, ownProps: TabOwnProps) => ({
        onClick: () => {
            dispatch(toggleTab(ownProps.tabKey));
        },
    }),
)(Tab);
