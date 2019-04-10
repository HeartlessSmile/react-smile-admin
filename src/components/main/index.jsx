import React, {
    Component
} from 'react';
import {Layout} from 'antd';
import HeaderBar from './components/header-bar/headerbar.js';
import SiderBar from './components/sider-bar/siderbar.js';
import "./index.less";
const { Content, Sider } = Layout;
const menus = [
    {
        title:"首页",
        icon:"home",
        key:"/home"
    },
    {
        title:"配置中心",
        icon:"desktop",
        key:"/configure",
        children:[
            {
                title:"资源管理",
                key:"/configure/resources"
            },
            {
                title:"权限管理",
                key:"/configure/jurisdiction"
            }
        ]
    }
]
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
                <Sider width={256} style={{ background: '#001529' }} collapsed={this.state.collapsed}>
                    <div className="logo">
                        <img src={require('@/assets/image/logo.png')} alt="" />
                        {collapsed ?'':(<span className="logoWord">XXX后台系统</span>)}
                    </div>
                    <SiderBar menus={menus}></SiderBar>
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
