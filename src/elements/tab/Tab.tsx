import * as React from "react";
import {PropsWithChildren} from "react";
import {connect} from "react-redux";
import {AppState, TabKey, toggleTab} from "../../data";
import "./Tab.scss";

interface TabStateProps {
    open: boolean;
}

interface TabDispatchProps {
    onClick: () => void;
}

interface TabOwnProps {
    title: string;
    subTitle: string;
    tabKey: TabKey;
}

const Tab: React.FunctionComponent<TabStateProps & TabDispatchProps & TabOwnProps> =
    ({children, title, subTitle, open, onClick}) =>
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

export default connect<TabStateProps, TabDispatchProps, PropsWithChildren<TabOwnProps>, AppState>(
    (state: AppState, ownProps: TabOwnProps) => ({
        open: state.tabs.indexOf(ownProps.tabKey) !== -1,
    }),
    (dispatch, ownProps: TabOwnProps) => ({
        onClick: () => {
            dispatch(toggleTab(ownProps.tabKey));
        },
    }),
)(Tab);
