import React, {
    Component
} from 'react';
import { Menu, Icon } from 'antd';
import {Link,withRouter} from 'react-router-dom'
import './siderbar.less'
class SiderBar extends Component {
    state={

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
        // return (
        //   <Menu.Item key={key}>
        //     <Link to={key}>
        //       {icon && <Icon type={icon}/>}
        //       <span>{title}</span>
        //     </Link>
        //   </Menu.Item>
        // )

        return (
            <Menu.Item key={key}>
              {icon && <Icon type={icon}/>}
              <span>{title}</span>
            </Menu.Item>
        )
    }
    render() {
        return (
            <div className="layout_sider_box">
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
export default SiderBar;
