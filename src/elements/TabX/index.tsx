import * as React from "react"
import Collapsible from "react-collapsible"
import {TabKey} from "../../data"

interface TabXProps {
    title: string
    subTitle: string
    tabKey: TabKey
}

const TabX: React.FunctionComponent<TabXProps> = (props) => <Collapsible trigger={
    <div>
        <h3>{props.title}</h3>
        <p>{props.subTitle}</p>
    </div>
}>
    <p>{props.children}</p>
</Collapsible>

export default TabX
