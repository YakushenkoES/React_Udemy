import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunkMiddleware from "redux-thunk";

const logMiddleware = (store) => (next) => (action) => {
    console.log(action.type, store.getState());
    return next(action);
};
const stringMiddleware = () => (next) => (action) => {
    if (typeof action === "string") {
        return next({ type: action });
    }
    return next(action);
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

store.dispatch({ type: "HELLO_WORLD" });

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({ type: "DELAYED_ACTION" }, timeout));
};

store.dispatch(delayedActionCreator(3000));

export default store;
