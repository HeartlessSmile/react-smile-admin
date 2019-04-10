import React, {
    Component
} from 'react';
import {Layout} from 'antd';
import HeaderBar from './components/header-bar/headerbar.js';
import SiderBar from './components/sider-bar/siderbar.js';
import "./index.less";
const { Content, Sider } = Layout;
class Main extends Component {
    state={
        collapsed:false
    }
    onCollapse = () => {
    	this.setState({
    		collapsed: !this.state.collapsed
    	});
    }
    render() {
        const collapsed = this.state.collapsed
        return (
            <Layout className="main_box">
                <Sider width={256} style={{ background: '#14192A' }} collapsed={this.state.collapsed}>
                    <div className="logo">
                        <img src={require('@/assets/image/logo.png')} alt="" />
                        {collapsed ?'':(<span className="logoWord">XXX后台系统</span>)}
                    </div>
                    <SiderBar></SiderBar>
                </Sider>
                <Layout>
                    <HeaderBar collapsed={this.state.collapsed} collapsedClick={this.onCollapse.bind(this)}></HeaderBar>
                    <Content></Content>
                </Layout>


            </Layout>
        )
    }
}
export default Main;
