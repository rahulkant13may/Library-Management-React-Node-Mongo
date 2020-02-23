import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './Container/LandingPage';
import BookDetail from './BookDetail';
import { createStore } from "redux";
import reducer from './store/reducer';

const store = createStore(reducer)

ReactDOM.render(

<Router>
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/book_detail/:name" component={BookDetail} />
        </div>
</Router>, document.getElementById('root'));

serviceWorker.unregister();
