import React, {Component } from 'react';
import {Layout,Menu, Dropdown, Icon,message } from 'antd';
import "./headerbar.less"

const { Header} = Layout;

class HeaderBar extends Component {

    state={
        userName:'admin'
    };
    user_li_click = ({ item, key, keyPath }) => {
        message.info(`Click on item ${key}`);
    };
    iconClick(){
        this.props.collapsedClick()
    }
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
        const iconType = this.props.collapsed?"menu-unfold":"menu-fold"
        return (
            <Header className="layout_Header_box">
                <div className="header_left">

                    <Icon type={iconType} style={{ fontSize: '16px' }} onClick={this.iconClick.bind(this)}/>

                </div>
                <div className="header_right">
                    <div className="company_list_container">

                    </div>
                    <div className="user_container">
                        <Dropdown overlay={usermenu} trigger={['click']}>
                            <a className="ant-dropdown-link" href="/">
                                {this.state.userName} <Icon type="down" />
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </Header>
        )
    }
}
export default HeaderBar;
