
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk"
import rootReducer from "./Reducers"
import {createStore, applyMiddleware} from "redux";
import App from "./App";


const store =createStore(
    rootReducer,
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(thunk)
);



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));