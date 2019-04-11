import React, { Component } from 'react';

import './assets/css/index.less';  //修改主題色

import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from '@/views/login/login.jsx';
import Main from '@/components/main/index.jsx';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route  path="/" component={Main} />
                    <Route  path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;
