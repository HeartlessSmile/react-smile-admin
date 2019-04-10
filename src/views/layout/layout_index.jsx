import React, {
    Component
} from 'react';
import {Layout} from 'antd';
import IndexHeader from '@/components/index_header.jsx';
import IndexSider from '@/components/index_sider.jsx';
import "./style/layout_index.less";
const { Content, Sider } = Layout;
class LayoutIndex extends Component {
    render() {
        return ( 
            <Layout className="main_box">
                <Sider width={256} style={{ background: '#14192A' }}>
                    <IndexSider></IndexSider>
                </Sider>
                <Content>
                    <IndexHeader></IndexHeader>
                    <Content style={{ minHeight: 'calc(100% - 60px)' }}></Content>
                </Content>
                
                
            </Layout>
        )
    }
}
export default LayoutIndex;