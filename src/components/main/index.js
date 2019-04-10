import React, {
    Component
} from 'react';
import {Layout} from 'antd';
import HeaderBar from './components/header-bar/headerbar.js';
import SiderBar from './components/sider-bar/siderbar.js';
import "./index.less";
const { Content, Sider } = Layout;
class Main extends Component {
    render() {
        return ( 
            <Layout className="main_box">
                <Sider width={256} style={{ background: '#14192A' }}>
                    <SiderBar></SiderBar>
                </Sider>
                <Layout>
                    <HeaderBar></HeaderBar>
                    <Content style={{ minHeight: 'calc(100% - 60px)' }}></Content>
                </Layout>
                
                
            </Layout>
        )
    }
}
export default Main;