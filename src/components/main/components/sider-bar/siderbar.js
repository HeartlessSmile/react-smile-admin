import React, {
    Component
} from 'react';
import { Menu, Icon } from 'antd';
import './siderbar.less'
class SiderBar extends Component {
    render() {
        return (
            <div className="layout_sider_box">
            	<div className="logo">
            		<img src={require('@/assets/image/group.png')} alt="" />
            	</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
		            <Menu.Item key="1">
		              <Icon type="user" />
		              <span>nav 1</span>
		            </Menu.Item>
		            <Menu.Item key="2">
		              <Icon type="video-camera" />
		              <span>nav 2</span>
		            </Menu.Item>
		            <Menu.Item key="3">
		              <Icon type="upload" />
		              <span>nav 3</span>
		            </Menu.Item>
		         </Menu>
            </div>
        )
    }
}
export default SiderBar;