import React, {Component} from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import './Login.css'


class Login extends Component {

    render() {
        return (
            <div className="login-content">
                <Card hoverable className="content flex login-main">
                    <Form className="login-form">
                        <Form.Item>
                            <p className="login-title">COVID-19 Broadcast</p>
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="OTP"
                            />
                        </Form.Item>
                        {/*<Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>*/}
                        <Form.Item>
                            <div style={{ textAlign: 'right' }}>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{ textAlign: 'right'}}>
                                    Log in
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Login;
