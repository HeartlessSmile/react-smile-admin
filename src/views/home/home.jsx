import React, {
    Component
} from 'react';
import { Button ,Icon} from 'antd';
import IndexHeader from '@/components/index_header.jsx';

import './style/home.less'
class Home extends Component {
    render() {
        return ( 
            <div className="home_box">
                <IndexHeader></IndexHeader>
                <div className="meetlist_box">
                    {/* <div className="noData">
                        <img src={require('@/assets/image/undraw.png')}  alt="" />
                        <p>暂时没有创建会议哦 ，快快开始创建吧！</p>
                        <Button type="primary" ghost><Icon type="plus" />创建会议</Button>
                    </div> */}
                    <div className="meetList_box">
                        <div className="search_box">
                            <Button type="primary" ghost><Icon type="plus" />创建会议</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;