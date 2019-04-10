import React, {Component } from 'react';
import {Layout,Menu, Dropdown, Icon,message } from 'antd';
import "@/assets/css/antd_header.less"

const { Header} = Layout;

class IndexHeader extends Component {

    state={
        activeIndex:0,
        companyName:'丹源科技'
    };
    nav_li_click(index){
        this.setState({
            activeIndex:index
        })
    };
    user_li_click = ({ item, key, keyPath }) => {
        message.info(`Click on item ${key}`);
    };
    
    render() {
        const usermenu = (
            <Menu onClick={this.user_li_click}>
                <Menu.Item key="0">
                    <div className="userLi">
                        <Icon type="user" />
                        <span>账号管理</span>
                    </div>
                </Menu.Item>
                <Menu.Item key="1">
                    <div className="userLi" >
                        <Icon type="menu-unfold" />
                        <span>退出登录</span>
                    </div>
                </Menu.Item>
            </Menu>
        );
        return (
            <Header className="layout_Header_box">
                <div className="header_left">
                    <div className="logo">
                        <img src={require('../assets/image/group.png')} alt="" />
                    </div>
                    <ul className="header_nav_ul">
                        <li className={`nav_ul_li ${this.state.activeIndex === 0?'active':''}`} onClick={this.nav_li_click.bind(this,0)}>会议列表</li>
                        <li className={`nav_ul_li ${this.state.activeIndex === 1?'active':''}`} onClick={this.nav_li_click.bind(this,1)}>账号管理</li>
                    </ul>
                </div> 
                <div className="header_right">
                    <div className="company_list_container">
                        
                    </div>
                    <div className="user_container">
                        <Dropdown overlay={usermenu} trigger={['click']}>
                            <a className="ant-dropdown-link" href="/">
                                {this.state.companyName} <Icon type="down" />
                            </a>
                        </Dropdown>
                    </div>
                </div> 
            </Header>
        )
    }
}
export default IndexHeader;