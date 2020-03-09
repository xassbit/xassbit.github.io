import {AnyAction, createStore} from "redux"
import {persistCombineReducers} from "redux-persist"
import storage from "redux-persist/lib/storage"

export enum TabKey {
    formativeYears,
    university,
    musicPorto,
    newcraft,
    srprsme,
    jamWithHumans,
}

const TOGGLE_TAB = "TOGGLE_TAB"
export const toggleTab = (tabKey: TabKey): AnyAction => ({type: TOGGLE_TAB, tabKey})

const initialState = [
    TabKey.university,
    TabKey.newcraft,
    TabKey.srprsme,
]

const tabs = (state: TabKey[] = initialState, action: AnyAction): TabKey[] => {
    let newState: TabKey[]
    if (action.type === TOGGLE_TAB) {
        newState = state.slice(0)
        const tabIndex = newState.indexOf(action.tabKey)
        if (tabIndex > -1) {
            newState.splice(tabIndex, 1)
        } else {
            newState.push(action.tabKey)
        }
        return newState
    } else {
        return state
    }
}

export interface AppState {
    tabs: TabKey[]
}

const persistConfig = {
    key: "daniel_m_f_cv",
    storage,
}

const reducer = persistCombineReducers<TabKey[]>(persistConfig, {
    tabs,
})

export const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
)
