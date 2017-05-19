import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import AppProj2 from './AppProj2.jsx';
import Popap from './Popap.jsx';
import Styles from '../sass/index.scss';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={AppProj2} />
        <Route path="/users" component={Popap} />
    </Router>,
    document.getElementById('root1')
);
