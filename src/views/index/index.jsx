import React, {
    Component
} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from '@/views/login/login.jsx'
import Home from '@/views/home/home.jsx'
class Index extends Component {
    render() {
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Index;