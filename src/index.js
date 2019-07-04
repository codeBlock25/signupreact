import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import SignUp from './pages/signUp';
import * as serviceWorker from './serviceWorker';
import Nav from './components/nav';

ReactDOM.render(
    <BrowserRouter>
    <div>
    <Nav />
    <Route exact path="/" component={SignUp} />
    </div>
    </BrowserRouter> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
