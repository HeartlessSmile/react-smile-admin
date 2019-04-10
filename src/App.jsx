import React, { Component } from 'react';

import './assets/css/index.less';  //修改主題色

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Index from '@/views/index/index.jsx';
import Login from '@/views/login/login.jsx';
import Home from '@/views/home/home.jsx';
import LayoutIndex from '@/views/layout/layout_index.jsx';
import Main from '@/components/main/index.js';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/login" component={Login} />
                    // <Route exact path="/home" component={Home} />
                    // <Route exact path="/layout" component={LayoutIndex} />
                    // <Route exact path="/main" component={Main} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;
