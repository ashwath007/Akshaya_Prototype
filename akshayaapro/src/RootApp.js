import React from "react";
import App from "./App"
import { Provider } from "react-redux";
import store from "./store";
const RootApp = () => {
    <Provider
    store={store}
    >   
        <App/>
    </Provider>
}

export default RootApp;