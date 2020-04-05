import React, { Component } from 'react';
import { Button, InputNumber, Layout, Card, Form, Alert, Modal } from 'antd';


import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';
import { UserOutlined } from '@ant-design/icons';
import api from '../../utils/api';
import localization from '../../localization';
import { savePhone as _savePhone, saveAuthToken as _saveAuthToken } from '../../redux/actions/auth';


const showError = (err) => {
  Modal.error({
    title: err,
    className: 'border-2 border-blue-dark rounded-md p-0',
    okText: localization.t('ok'),
  });
};
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '855',
      isLoading: false,
      error: null,
      phoneError: false,
      codeSent: false,
      code: '',
    };
    this.requestOtp = this.requestOtp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.authenticateOtp = this.authenticateOtp.bind(this);
    this.handleOtpChange = this.handleOtpChange.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
    this.changePhone = this.changePhone.bind(this);
  }

  async requestOtp() {
    this.validatePhone();
    const { phone, phoneError } = this.state;
    if (phoneError) {
      showError(localization.t('invalid_phone'));
      return;
    }
    this.setState({
      isLoading: true,
    });
    try {
      const result = await api.requestOtp(`+${phone}`);
      console.log('result', result);

      const { savePhone } = this.props;
      savePhone(phone);

      this.setState({
        codeSent: true,
        isLoading: false,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err.response.data,
      });
    }
  }

  async authenticateOtp() {
    const { code, phone } = this.state;
    this.setState({
      isLoading: true,
    });
    try {
      const result = await api.authenticateOtp(`+${phone}`, `${code}`);
      const { saveAuthToken, history } = this.props;
      await api.login(result.data.data.customToken);
      const token = await api.getIdTokenResult();
      saveAuthToken(token);
      history.push('/');
    } catch (error) {
      console.log('error.response', error);
      this.setState({
        isLoading: false,
        error: error.response.data,
      });
    }
  }

  handleOtpChange(value) {
    this.setState({
      code: value,
    });
  }


  handleInputChange(value) {
    this.setState({
      phone: value ? `${value}` : '855',
    });
  }

  validatePhone() {
    const { phone } = this.state;
    this.setState({
      phoneError: !phone || phone.length < 10,
    });
  }

  changePhone() {
    this.setState({
      phone: '',
      codeSent: false,
    });
  }


  render() {
    const { phone, isLoading, code, error, phoneError, codeSent } = this.state;
    const { t } = this.props;
    return (
      <Layout
        style={{ minHeight: '100vh', backgroundImage: 'url(/login-image.jpg)' }}
        className="flex flex-grow justify-center items-center"
      >
        {
                    !codeSent ? (
                      <Card
                        style={{ width: 500, minHeight: '38vh' }}
                        className="flex flex-col"
                        id="phone-login"
                      >
                        <h1 className="py-1 pb-4 text-xl" style={{ fontSize: '1.825em', fontWeight: 'bold' }}>{t('app_title')}</h1>
                        <h3 className="py-1 pb-6 text-lg" style={{ fontSize: '1.825em', fontWeight: 'bold' }}>{t('login_with_phone')}</h3>
                        <Form
                          className="flex flex-grow flex-col"
                        >

                          <InputNumber
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            className="py-1 w-full"
                            placeholder={t('phone_placeholder')}
                            name="phone"
                            maxLength="13"
                            value={phone}
                            onBlur={this.validatePhone}
                            type="text"
                            onChange={this.handleInputChange}
                          />

                          <Button
                            className="btn-round my-2 flex flex-grow items-center justify-center"
                            type="button"
                            onClick={this.requestOtp}
                            loading={isLoading}
                          >
                            {t('send_code')}
                          </Button>
                          {
                                    phoneError && <Alert className="my-2" message={t('invalid_phone')} type="warning" showIcon />
                                }
                          {
                                        error && <Alert className="my-2" message={error.message} type="error" showIcon />
                                    }
                        </Form>

                      </Card>
                    ) : (
                      <Card
                        style={{ width: 500, minHeight: '38vh' }}
                        className="flex flex-col"
                        id="otp-login"
                      >
                        <h1 className="py-1 pb-4 text-xl" style={{ fontSize: '1.825em', fontWeight: 'bold' }}>{t('app_title')}</h1>
                        <h3 className="py-1 pb-6 text-lg" style={{ fontSize: '1.825em', fontWeight: 'bold' }}>{t('enter_otp')}</h3>

                        <Form
                          className="flex flex-grow flex-col"
                        >

                          <InputNumber
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            className="py-1 w-full"
                            placeholder={t('otp_placeholder')}
                            name="code"
                            maxLength="6"
                            value={code}
                            onChange={this.handleOtpChange}
                          />
                          <Button
                            className="btn-round ml-1 my-2 flex flex-grow items-center justify-center"
                            type="button"
                            onClick={this.authenticateOtp}
                            loading={isLoading}
                          >
                            {t('login')}
                          </Button>
                          {
                                        error && <Alert className="my-2" message={error.message} type="error" showIcon />
                                    }
                        </Form>
                        <div className="trobleshoot-links flex flex-col justify-center items-center py-8">
                          <p>{t('not_recieve_code')}</p>
                          <div className="links-group flex flex-row items-center justify-center">
                            <Button
                              type="link"
                              onClick={this.changePhone}
                            >
                              {t('change_phone')}
                            </Button>
                            <span>{t('or')}</span>
                            <Button
                              type="link"
                              onClick={this.requestOtp}
                            >
                              {t('resend_otp')}
                            </Button>
                          </div>
                        </div>
                      </Card>
                    )
                }
      </Layout>
    );
  }
}
const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => ({
  savePhone: (phone) => {
    dispatch(_savePhone(phone));
  },
  saveAuthToken: (token) => {
    dispatch(_saveAuthToken(token));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(Login)));
