import React, {
    Component
} from 'react';
import md5 from "md5";
import { Form, Icon, Input, Button } from 'antd';
import './style/login.less'

class Login extends Component {

    state = {

    }
    //组件将要被渲染到真实的dom节点中
    componentWillMount() {
        console.log('componentWillMount');
    }
    //组件已经插入到真实的dom节点中
    componentDidMount() {

        console.log(this.props);
        this.props.form.validateFields();
    }
    //组件是否要被重新渲染
    shouldComponentUpdate() {
        // console.log('shouldComponentUpdate');
        return true;
    }
    //组件将要被重新渲染
    componentWillUpdate() {
        // console.log('componentWillUpdate');
    }
    //组件已经被重新渲染
    componentDidUpdate() {
        // console.log('componentDidUpdate');
    }
    //组件将要接收到新属性
    componnentWillReceiveProps() {
        console.log('componnentWillReceiveProps');
    }
    // 登录请求
    formSubmit(e) {
        e.preventDefault();
        let self = this;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let oldPwd = values.password;
                values.areanum = "0086";
                values.password = md5(values.password)
                fetch('/api/meeting-client/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                })
                    .then(json => json.json())
                    .then(res => {
                        if (res.code === '001005') {
                            self.props.form.setFields({
                                password: {
                                    value: oldPwd,
                                    errors: [new Error(res.msg)],
                                }
                            })
                        } else if (res.code === '000000') {
                            this.props.history.push('/home')
                            localStorage.setItem('token', res.token)
                        }
                    })


            }
        });
    }
    // 检查手机号是否注册过
    isPhoneInData(rule, value, callback) {
        fetch('/api/meeting-client/user/checkUserPhoneIsExists?telephone=' + value)
            .then(json => json.json())
            .then(res => {
                if (res.code === "001011") {
                    callback();
                } else if (res.code === "000000") {
                    this.props.form.setFields({
                        username: {
                            value: value,
                            errors: [new Error('手机号不存在')],
                        }
                    })
                }
            })

    }
    render() {
        const {
            getFieldDecorator, getFieldsError
        } = this.props.form;
        // 检查数据是否合法登录按钮是否能够操作
        function hasErrors(fieldsError) {
            return Object.keys(fieldsError).some(field => fieldsError[field]) || false;
        }
        return (
            <div className="login">
                <div className="content">
                    <h2 className="login_header_name">登录</h2>
                    <div className="form_container">
                        <Form onSubmit={this.formSubmit.bind(this)}>
                            <Form.Item>
                                {
                                    getFieldDecorator('username', {
                                        rules: [
                                            { required: true, message: '名称不能为空' },
                                            { pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: '请输入正确格式手机号' },
                                            { validator: (rule, value, callback) => this.isPhoneInData(rule, value, callback) }
                                        ],
                                        validateFirst: true
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />
                                    )
                                }

                            </Form.Item>
                            <Form.Item>
                                {/* 清除自动填充 */}
                                <input type="password" style={{ display: "none" }} />
                                {
                                    getFieldDecorator('password', {
                                        rules: [{ required: true, message: '密码不能为空' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" type="password" />
                                    )
                                }

                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="form_login" disabled={hasErrors(getFieldsError())}> 登录</Button>
                                <div className="form_foot">
                                    <a href="/login">免费注册</a>
                                    <a href="/login">忘记密码</a>
                                </div>
                            </Form.Item>
                            <div className="form_agreement">
                                注册即表示同意 <a href="/login">《软件注册协议》</a>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
Login = Form.create({})(Login);
export default Login;