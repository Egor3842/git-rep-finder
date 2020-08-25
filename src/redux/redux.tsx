import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Reducer, { RequestAxios } from './Reducer'

const sagaMiddleware = createSagaMiddleware()


const saveState = (state: AppStateType) => {
    try {

        const serialisedState = JSON.stringify(state);
        window.sessionStorage.setItem('app_state', serialisedState);
    } catch (err) {
    }
};
const loadState = () => {
    try {
        const serialisedState = window.sessionStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const oldState = loadState();


let reducers = combineReducers(
    {
        Reducer: Reducer,
    }
)

type reducersType = typeof reducers;
export type AppStateType = ReturnType<reducersType>
export const store = createStore(
    reducers, oldState, applyMiddleware(sagaMiddleware)
)
store.subscribe(() => {
    saveState(store.getState());
});
sagaMiddleware.run(RequestAxios)