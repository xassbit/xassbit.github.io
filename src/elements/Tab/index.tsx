import * as React from "react";
import {PropsWithChildren} from "react";
import {connect} from "react-redux";
import {AppState, TabKey, toggleTab} from "src/data";
import * as style from "./style.scss";

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
    <div className={style.tab}>
        <div className={style.tabHeader} onClick={onClick}>
            <div className={style.tabHeaderText}>
                <h3>{title}</h3>
                <p className={style.tabSubTitle}>{subTitle}</p>
            </div>
            <div className={style.cross}>
                <div className={[style.cross1, open ? style.open : ""].join(" ")}/>
                <div className={[style.cross2, open ? style.open : ""].join(" ")}/>
            </div>
        </div>
        <div className={[style.tabBody, open ? style.open : ""].join(" ")}>
            <div className={style.tabContent}>
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
