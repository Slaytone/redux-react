import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import reducer from './reduce';
import App from './components/app.js';



const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));






