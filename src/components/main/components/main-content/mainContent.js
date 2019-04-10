import React, {
    Component
} from 'react';
import './mainContent.less';
import { Route, Switch } from 'react-router-dom';
import Home from '@/views/home/home.js';
import Jurisdiction from '@/views/configure/jurisdiction.js';
import Resources from '@/views/configure/resources.js';
class mainContent extends Component {
    state={

    }

    render() {
        return (
            <div className="main-content-box">
                <Switch>
                    <Route path="/home" component={Home} ></Route>
                    <Route path="/configure/jurisdiction" component={Jurisdiction} ></Route>
                    <Route path="/configure/resources" component={Resources} ></Route>
                </Switch>
            </div>
        )
    }
}
export default mainContent;
