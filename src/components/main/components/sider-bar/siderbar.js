import React, {
    Component
} from 'react';
import { Menu, Icon } from 'antd';
import {Link,withRouter} from 'react-router-dom'
import './siderbar.less'


class SiderBar extends Component {
    state = {
		selectedKeys: [],
		openKeys: []
	}
	componentDidMount() {
		const pathname = this.props.location.pathname;
		const rank = pathname.split('/')
		switch (rank.length) {
			case 2: //一级目录
				this.setState({
					selectedKeys: [pathname]
				})
				break;
			default:
				this.setState({
					selectedKeys: [pathname],
					openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))]
				})
		}
	}

	componentWillReceiveProps(nextProps) {
		// 点击其他地方跳转时候  对应的目录也要改变状态
		const pathname = nextProps.location.pathname
		if (this.props.location.pathname !== pathname) {
			this.setState({
				selectedKeys: [pathname],
			})
		}
	}


    renderSubMenu = ({key,icon,title,children})=>{
        return (
            <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
                {
                  children && children.map(item => {
                    return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                  })
                }
            </Menu.SubMenu>
        )
    }
    renderMenuItem = ({key,icon,title})=>{
        return (
          <Menu.Item key={key}>
            <Link to={key}>
              {icon && <Icon type={icon}/>}
              <span>{title}</span>
            </Link>
          </Menu.Item>
        )
    }

    onOpenChange = (openKeys) => {
        // 当前只试用两成目录
        if (openKeys.length === 0 || openKeys.length === 1) {
            this.setState({
                openKeys
            })
            return
        }

    }

    render() {
        const {openKeys, selectedKeys} = this.state
        return (
            <div className="layout_sider_box">
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    onOpenChange={this.onOpenChange}
                    onClick={({key}) => this.setState({selectedKeys: [key]})}>
                {
                  this.props.menus && this.props.menus.map(item => {
                    return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                  })
                }
		         </Menu>
            </div>
        )
    }
}
export default withRouter(SiderBar);
