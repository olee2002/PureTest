import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './styles.scss';
import * as serviceWorker from './serviceWorker';
import Router from "./routes";
import store from "./state/store";

const App = () => {
    return (
        <main className="mainContainer">
            <Provider store={store}>
                <Router />
            </Provider>
        </main>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
